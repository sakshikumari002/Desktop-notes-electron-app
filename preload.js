
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Add any API you want to expose to the renderer process here
  sendMessage: (message) => ipcRenderer.send('message', message),
});
