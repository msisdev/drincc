import { $POLICY } from "../config"

const inMemoryStore: Record<string, string> = {}

/** Cloudflare KV store wrapper */
async function put(env: Env, key: string, value: KVValue) {
  let serialized = JSON.stringify(value)
  switch (env.WHICH_ENV) {
    case "development":
      inMemoryStore[key] = serialized
      break

    case "preview":
    case "production":
    default:
      await env.KV.put(key, serialized, { expirationTtl: $POLICY.kvTTL })
      break
  }
}

/** Cloudflare KV store wrapper */
async function get(env: Env, key: string) {
  let value: string | null
  
  switch (env.WHICH_ENV) {
    case "development":
      console.log("inMemo:", inMemoryStore)
      if (key in inMemoryStore) {
        value = inMemoryStore[key]
      } else {
        value = null
      }
      break
      
    case "preview":
    case "production":
    default:
      value = await env.KV.get(key) ?? null
      break
  }

  if (value === null) return null
  return JSON.parse(value) as KVValue
}

export default { put, get }
