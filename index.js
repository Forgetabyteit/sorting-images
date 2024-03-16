const fs = require('fs');
const path = require('path');
const electron = require('electron');

const { app, BrowserWindow, ipcMain, globalShortcut } = electron;

const unsortedFolder = path.join(__dirname, 'unsorted');
const likedFolder = path.join(__dirname, 'liked');
const dislikedFolder = path.join(__dirname, 'disliked');

let mainWindow;
let currentImagePath;

function createWindow() {
  mainWindow = new BrowserWindow({
    frame: false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function loadRandomImage() {
  fs.readdir(unsortedFolder, (err, files) => {
    if (err) {
      console.error('Error reading unsorted folder:', err);
      app.quit();
      return;
    }

    if (files.length === 0) {
      console.log('No more images to sort. Closing the program.');
      app.quit();
      return;
    }

    const randomIndex = Math.floor(Math.random() * files.length);
    const randomImage = files[randomIndex];
    currentImagePath = path.join(unsortedFolder, randomImage);

    mainWindow.webContents.send('display-image', currentImagePath);
  });
}

function moveImage(destinationFolder) {
  if (!currentImagePath) {
    console.log('No image to move.');
    return;
  }

  const fileName = path.basename(currentImagePath);
  const destinationPath = path.join(destinationFolder, fileName);

  fs.rename(currentImagePath, destinationPath, (err) => {
    if (err) {
      console.error('Error moving image:', err);
    } else {
      console.log(`Image moved to ${destinationFolder}`);
      currentImagePath = null;
      loadRandomImage();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  loadRandomImage();

  globalShortcut.register('Left', () => {
    moveImage(dislikedFolder);
  });

  globalShortcut.register('Right', () => {
    moveImage(likedFolder);
  });

  globalShortcut.register('Escape', () => {
    app.quit();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('move-to-liked', () => {
  moveImage(likedFolder);
});

ipcMain.on('move-to-disliked', () => {
  moveImage(dislikedFolder);
});