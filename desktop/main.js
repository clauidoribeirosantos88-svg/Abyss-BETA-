const {app,BrowserWindow,ipcMain,screen}=require('electron'),path=require('path'),fs=require('fs');
const SF=()=>path.join(app.getPath('userData'),'tela.json');
let mode='jan',win=null;
try{mode=JSON.parse(fs.readFileSync(SF(),'utf8')).mode||'jan'}catch(e){}
function create(){
 const d=screen.getPrimaryDisplay();
 const o={backgroundColor:'#0d0b14',autoHideMenuBar:true,title:'Abyss [BETA]',icon:path.join(__dirname,'../icons/icon-512.png'),webPreferences:{preload:path.join(__dirname,'preload.js'),contextIsolation:true}};
 if(mode==='cheia')o.fullscreen=true;
 else if(mode==='borda')Object.assign(o,{frame:false,x:d.bounds.x,y:d.bounds.y,width:d.bounds.width,height:d.bounds.height,resizable:false,hasShadow:false});
 else Object.assign(o,{width:1280,height:720});
 win=new BrowserWindow(o);win.setMenuBarVisibility(false);
 win.loadFile(path.join(__dirname,'../index.html'));
 win.webContents.on('before-input-event',(e,i)=>{if(i.key==='F11'&&i.type==='keyDown'){e.preventDefault();win.setFullScreen(!win.isFullScreen())}});
}
function setMode(m){mode=m;try{fs.writeFileSync(SF(),JSON.stringify({mode}))}catch(e){}const old=win;create();if(old)old.destroy()}
ipcMain.handle('scr:get',()=>mode);
ipcMain.on('scr:set',(e,m)=>{if(['jan','cheia','borda'].includes(m)&&m!==mode)setMode(m)});
app.whenReady().then(create);app.on('window-all-closed',()=>app.quit());
