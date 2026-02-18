
module.exports = {
  // Antigravity Configuration File
  // This file configures the build and packaging process for your desktop app.
  
  appId: "com.example.workshop-app",
  productName: "Workshop Demo App",
  directories: {
    output: "dist_electron",
    app: ".",
  },
  win: {
    target: "nsis",
    icon: "client/public/favicon.png"
  },
  mac: {
    target: "dmg",
  },
  linux: {
    target: "AppImage",
  }
};
