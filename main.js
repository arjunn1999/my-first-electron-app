const {app,BrowserWindow, Menu} = require("electron");
const path = require("path");

function createWindow() {
    
    const window =  new BrowserWindow(
        {
            width:800,
            height:600,
            webPreferences:{
                preload:path.join(__dirname,'preload.js')
            }
        }
    );
    window.loadFile('index.html');
    window.webContents.openDevTools()
    
}


app.whenReady().then(()=>
    {
        createWindow();
        app.on("activate",()=>{
            if (BrowserWindow.getAllWindows().length==0){
                 createWindow();
        }
            }
        );
        const template = [{
            label:"Menu",
            submenu:[
                {label:"M1"},
                {label:"m2"}
            ]
        }]
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu)
        
    }
);


app.on('window-closed',()=>{app.quit()});

