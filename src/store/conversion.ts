import { atom } from "nanostores"

export const $conversions = atom<Conversion[]>([
  { key: "example", url: "https://drin.cc" },
])

export function addConversion(c: Conversion) {
  $conversions.set([...$conversions.get(), c])
}
