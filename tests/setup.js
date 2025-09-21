import { vi } from 'vitest'

// Mock global do IndexedDB
global.indexedDB = {
  open: vi.fn(() => {
    return {
      onupgradeneeded: null,
      onsuccess: null,
      onerror: null,
      result: {}, // você pode adicionar métodos mockados se precisar
    }
  }),
}
