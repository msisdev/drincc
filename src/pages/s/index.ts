import type { APIRoute } from "astro"
import { $PATH, $POLICY } from "~/config"
import config from "./config"
import kv from "~/lib/kv"
import { getOrGrowKey } from "~/lib/key"

export const POST: APIRoute = async ({ request, locals }) => {
  if (request.method !== "POST") {
    return Response.redirect($PATH.home)
  }
  const env = locals.runtime.env

  /**
   * FormData
   */
  const data = await request.formData()
  const parsed = config.req.schema.safeParse(data)
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
      const result = await kv.get(env, key)
      if (result !== null) break
      key = getOrGrowKey(parsed.data.option ?? "short", key)
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
    return new Response("internal", { status: 500 })
  }

  return new Response("ok")
}
