var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'Quark-win32-x64',
    outputDirectory: 'electron/releases',
    authors: 'Mark Blundred',
    exe: 'Quark.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
