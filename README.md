
# Workshop Demo App - Electron + Antigravity

This is a simple mini-project for the cross-platform desktop application workshop.
It uses **ElectronJS** for the runtime and **Antigravity** for project structuring and packaging.

## Prerequisites

1.  **Node.js**: Install from [nodejs.org](https://nodejs.org/) (LTS version recommended).
2.  **Git**: Install from [git-scm.com](https://git-scm.com/).

## Project Structure

```
.
├── client/                 # Frontend (React/Vite)
│   ├── src/                # Source code
│   └── index.html          # Entry point
├── server/                 # Backend (Node/Express) - optional for standalone desktop
├── main.js                 # Electron main process
├── preload.js              # Electron preload script
├── antigravity.config.js   # Build & Packaging configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Setup Instructions

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd <project-folder>
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```
    *This installs all necessary packages including Electron and Antigravity tools.*

## Running Locally

To start the application in development mode:

1.  **Start the frontend dev server**:
    ```bash
    npm run dev
    ```

2.  **Start Electron** (in a new terminal):
    ```bash
    npx electron .
    ```

## Packaging for Windows

To build the executable installer for Windows:

1.  **Run the build command**:
    ```bash
    npx electron-builder --win
    ```
    *This uses the settings in `antigravity.config.js` to create the installer.*

2.  **Locate the installer**:
    The `.exe` file will be generated in the `dist_electron` folder.

## Submission

Submit this repository link or the zipped project folder along with the screenshot of the running application.
(https://github.com/user-attachments/assets/0d295e8d-b7ae-4495-a609-d5b773e37b47)
(https://github.com/user-attachments/assets/997e519c-96c4-4182-b90f-b1874400c27c)
(https://github.com/user-attachments/assets/1a8aa735-78fc-4b2c-b9b9-75865379c8e0)
(https://github.com/user-attachments/assets/5c68954d-4fcc-4a32-adbf-e956a8b392b1)

## Live App link 
   https://electron-antigravity-kit--sakshikumari920.replit.app

##  Build with love with help of CipherSchool
