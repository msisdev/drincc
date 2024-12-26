import { atom } from "nanostores";

export function createPersistentStore<T>(key: string, defaultValue: T) {
  const store = atom(defaultValue)

  // sync with session storage
  if (typeof window !== "undefined") {
    // load data
    const storedValue = sessionStorage.getItem(key)
    if (storedValue) {
      try {
        
        store.set(JSON.parse(storedValue))
      } catch (e) {
        console.error("Error parsing sessionStorage:", e)
      }
    }
  
    // store data
    store.subscribe(v => {
      sessionStorage.setItem(key, JSON.stringify(v))
    })
  }

  return store
}
