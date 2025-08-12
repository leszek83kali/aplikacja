
const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow () {
  const win = new BrowserWindow({ width:1200, height:800, backgroundColor:'#0b1020', autoHideMenuBar:true, icon:path.join(__dirname,'icon.png'), webPreferences:{ sandbox:false } });
  win.setTitle('Rejestr nadgodzin');
  win.loadFile(path.join(__dirname,'web','index.html'));
}
app.whenReady().then(()=>{ createWindow(); app.on('activate',()=>{ if (BrowserWindow.getAllWindows().length===0) createWindow();});});
app.on('window-all-closed',()=>{ if (process.platform!=='darwin') app.quit(); });
