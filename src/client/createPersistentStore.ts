import { atom } from "nanostores";

export function createPersistentStore<T>(key: string, defaultValue: T) {
  const store = atom(defaultValue)

  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      try {
        store.set(JSON.parse(storedValue))
      } catch (e) {
        console.error("Error parsing localStorage:", e)
      }
    }
  
    store.subscribe(v => {
      localStorage.setItem(key, JSON.stringify(v))
    })
  }

  return store
}
