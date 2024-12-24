import { z } from "zod"

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

const reqSchema = z.object({
  url:      z.string().url(),
  preview:  z.coerce.boolean(),
  option:   z.enum(["short", "micro", "words"]).optional(),
}) satisfies KeyAsZod<ReqKey>

export default {
  req: { names: reqNames, option: optionNames, schema: reqSchema },

}