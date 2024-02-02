import { WindowContextAPI } from '@shared/types'
import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  const options: WindowContextAPI = {
    locale: navigator.language
  }

  contextBridge.exposeInMainWorld('context', options)
} catch (error) {
  console.error(error)
}
