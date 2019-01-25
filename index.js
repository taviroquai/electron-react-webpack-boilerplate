const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
    let windowOptions = { width: 1280, height: 720 } // HD
    win = new BrowserWindow(windowOptions)

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'output', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    //win.webContents.openDevTools()

    // Comunicate with renderer
    ipcMain.on('renderer', (event, message) => {
        // Parse message and send back the result
        event.sender.send('main', message);
    });

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
