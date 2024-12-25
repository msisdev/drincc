import { $POLICY } from "~/config"
import { wordset } from "./wordset"

type Mode = "short" | "micro" | "words"

/**
 * Helper functions
 */

function pickIndex(length: number): number {
  let buf = new Uint32Array(1)
  crypto.getRandomValues(buf)
  return buf[0] % length
}
const shortChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function pickOneShort(): string {
  return shortChar[pickIndex(shortChar.length)]
}
const microChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
function pickOneMicro(): string {
  return microChar[pickIndex(microChar.length)]
}
function pickOneWord(): string {
  return wordset[pickIndex(wordset.length)]
}
function getBaseKey(length: number, callback: () => string): string {
  return Array.from({ length }, callback).join("")
}

/**
 * 
 * @param mode key generation mode
 * @param prev previously generated key string
 * @returns base key or incremented key
 */
function getOrGrowKey(mode: Mode, prev?: string): string {
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

export { getOrGrowKey }
