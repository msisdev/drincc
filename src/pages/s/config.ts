import { z } from "zod"

/**
 * Request
 */

type ReqKey = "url" | "preview" | "option"
type OptionKey = "short" | "micro" | "words"

const reqNames: KeyAsValue<ReqKey> = {
  url: "url",
  preview: "preview",
  option: "option"
}
const optionNames: KeyAsValue<OptionKey> = {
  short: "short",
  micro: "micro",
  words: "words"
}

/**
 * Response
 */

const reqSchema = z.object({
  url:      z.string().url(),
  preview:  z.coerce.boolean(),
  option:   z.enum(["short", "micro", "words"]).optional(),
}) satisfies KeyAsZod<ReqKey>

const resSchema = z.object({
  key: z.string(),
})

export default {
  req: { names: reqNames, options: optionNames, schema: reqSchema },
  res: { schema: resSchema },
}
