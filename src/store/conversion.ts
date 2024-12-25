import { createPersistentStore } from "~/client/createPersistentStore"

export const $conversions = createPersistentStore<Conversion[]>("conversions", [])

export function addConversion(c: Conversion) {
  $conversions.set([...$conversions.get(), c])
}
