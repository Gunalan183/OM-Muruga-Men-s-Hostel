# 🚀 START HERE - Quick Setup

## ⚠️ IMPORTANT: Fix the "react-icons" Error

You're seeing an error because dependencies aren't installed yet. Follow these steps:

---

## Step 1: Open Terminal in This Folder

**Windows:**
1. Open File Explorer
2. Navigate to: `G:\Project\OM Murugaa Pg Mens Hostel\om-muruga-hostel`
3. Click in the address bar and type: `cmd`
4. Press Enter

**OR**

1. Right-click in the folder
2. Select "Open in Terminal" or "Open PowerShell window here"

---

## Step 2: Install Dependencies

In the terminal, run ONE of these commands:

### Option A: Run the installation script
```cmd
INSTALL_DEPENDENCIES.bat
```

### Option B: Manual installation
```cmd
npm install
```

**Wait for it to complete.** This will install `react-icons` and all other packages.

---

## Step 3: Copy Photos

Run ONE of these:

### Option A: Batch file
```cmd
copy-photos.bat
```

### Option B: PowerShell
```powershell
.\copy-photos.ps1
```

### Option C: Manual
1. Create folder: `public\photos\`
2. Copy all `.jpeg` files from `G:\Project\OM Murugaa Pg Mens Hostel\photos\`
3. Paste into `public\photos\`

---

## Step 4: Start the Website

```cmd
npm run dev
```

Open your browser to: **http://localhost:5173/**

---

## ✅ That's It!

Your website should now be running without errors.

---

## 📝 Before Deploying

Update the phone number in these files:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Replace `+919876543210` with your actual number.

---

## 📚 More Information

- **Full Setup:** See `SETUP_INSTRUCTIONS.md`
- **Quick Start:** See `QUICK_START.md`
- **Fix Errors:** See `FIX_ERRORS.md`
- **Documentation:** See `README.md`

---

## 🆘 Still Having Issues?

1. Make sure you're in the `om-muruga-hostel` folder
2. Check that Node.js is installed: `node --version`
3. Try deleting `node_modules` folder and run `npm install` again
4. See `FIX_ERRORS.md` for detailed troubleshooting

---

**The error you're seeing is normal before running `npm install`!**
