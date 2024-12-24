import { ZodObject, type ZodTypeAny } from "zod"

declare global {
  type KeyAsValue<T extends string> = { [K in T]: K }
  type KeyAsZod<T extends string> = ZodObject<{ [K in T]: ZodTypeAny }>
}

export {}