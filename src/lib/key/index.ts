import { $POLICY } from "~/config"
import { wordset } from "./wordset"

type Mode = "short" | "micro" | "words"

/**
 * Helper functions
 */

function pickIndex(length: number) {
  return Math.floor(Math.random() * length)
}
const shortChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function pickOneShort() {
  return shortChar[pickIndex(shortChar.length)]
}
const microChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
function pickOneMicro() {
  return microChar[pickIndex(microChar.length)]
}
function pickOneWord() {
  return wordset[pickIndex(wordset.length)]
}
function getBaseKey(length: number, callback: () => string) {
  return Array.from({ length }, callback).join("")
}

function getKey(mode: Mode, prev?: string): string {
  /**
   * Return base key
   */
  if (!prev) {
    switch (mode) {
      case "short":
        return getBaseKey($POLICY.minKeyLen.short, pickOneShort)
      case "micro":
        return getBaseKey($POLICY.minKeyLen.micro, pickOneMicro)
      default:
      case "words":
        return getBaseKey($POLICY.minKeyLen.words, pickOneWord)
    }
  }

  /**
   * Return appended key
   */
  switch (mode) {
    case "short":
      return prev + pickOneShort()
    case "micro":
      return prev + pickOneMicro()
    case "words":
      return prev + pickOneWord()
  }
}

export { getKey }
