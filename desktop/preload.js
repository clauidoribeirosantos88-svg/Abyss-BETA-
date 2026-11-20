const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('abismoApp',{setScreen:m=>ipcRenderer.send('scr:set',m),getScreen:()=>ipcRenderer.invoke('scr:get')});
