import { WindowContextAPI } from "@shared/types";
import { contextBridge, ipcRenderer } from "electron";

if (!process.contextIsolated) {
  throw new Error("contextIsolation must be enabled in the BrowserWindow");
}

try {
  const options: WindowContextAPI = {
    locale: navigator.language,
    windowActions: {
      close() {
        ipcRenderer.invoke("closeWindow");
      },
      minimize() {
        ipcRenderer.invoke("minimizeWindow");
      },
      maximize() {
        ipcRenderer.invoke("maximizeWindow");
      }
    }
  };

  contextBridge.exposeInMainWorld("context", options);
} catch (error) {
  console.error(error);
}
