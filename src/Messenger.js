class Messenger {

  static on(cb) {
    if (global.ipcRenderer) global.ipcRenderer.on('main', cb)
  }

  static send(message) {
    if (global.ipcRenderer) global.ipcRenderer.send('renderer', message);
  }

}

export default Messenger;