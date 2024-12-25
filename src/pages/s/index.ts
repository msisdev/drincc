export const prerender = false

import type { APIRoute } from "astro"
import { $PATH, $POLICY } from "~/config"
import config from "./config"
import kv from "~/server/kv"
import { getOrGrowKey } from "~/server/key"
import type { z } from "zod"

export const POST: APIRoute = async ({ request, locals }) => {
  if (request.method !== "POST") {
    return Response.redirect($PATH.home)
  }
  const env = locals.runtime.env

  /**
   * FormData
   */
  const formData = await request.formData()
  const parsed = config.req.schema.safeParse(Object.fromEntries(formData.entries()))
  if (parsed.error) {
    return new Response("invalid data", { status: 400 })
  }

  /**
   * Get key
   */
  let key = getOrGrowKey(parsed.data.option ?? "short")

  /**
   * KV
   */
  try {
    // Check conflict
    let i = 0
    while (i < $POLICY.maxKeyTry) {
      console.log(`i: ${i}, key: ${key}`)
      const result = await kv.get(env, key)
      if (result === null) break
      key = getOrGrowKey(parsed.data.option ?? "short", key)

      i++
    }
    if (i == $POLICY.maxKeyTry) {
      return new Response("too many generated urls", { status: 507 })
    }

    // Write
    await kv.put(env, key, {
      url: parsed.data.url,
      preview: parsed.data.preview,
    })
  } catch (e) {
    console.error("kv error:", e)
    return new Response("internal", { status: 500 })
  }

  return Response.json({ key } satisfies z.infer<typeof config.res.schema>)
}
