# ⚡ Quick Start Guide

Get your OM Muruga Men's Hostel website running in 5 minutes!

## 🚀 Step 1: Copy Photos (IMPORTANT!)

Choose one method:

### Method A: Windows Batch File
```cmd
cd om-muruga-hostel
copy-photos.bat
```

### Method B: PowerShell Script
```powershell
cd om-muruga-hostel
.\copy-photos.ps1
```

### Method C: Manual Copy
1. Create folder: `om-muruga-hostel/public/photos/`
2. Copy all `.jpeg` files from `photos/` folder
3. Paste into `om-muruga-hostel/public/photos/`

## 🚀 Step 2: Install Dependencies

**IMPORTANT:** Open a new terminal/command prompt in the `om-muruga-hostel` folder and run:

### Method A: Run the installation script
```cmd
INSTALL_DEPENDENCIES.bat
```

### Method B: Manual installation
```bash
npm install
```

This will install `react-icons` and all other dependencies.

## 🚀 Step 3: Start Development Server

```bash
npm run dev
```

## 🚀 Step 4: Open in Browser

Navigate to: **http://localhost:5173/**

---

## ✅ That's it! Your website is running!

### 📝 Before Going Live:

1. **Update phone number** in these files:
   - `src/components/Navbar.jsx`
   - `src/components/Hero.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
   
   Replace: `+919876543210` with your actual number

2. **Update email** in:
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
   
   Replace: `info@ommurugehostel.com` with your actual email

### 🌐 Deploy to Production:

```bash
npm run build
```

Then deploy the `dist/` folder to:
- **Vercel** (easiest): `npm install -g vercel && vercel`
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Use gh-pages package

---

## 🆘 Troubleshooting

**Photos not showing?**
- Make sure photos are in `public/photos/` folder
- Check file names match in `src/components/Gallery.jsx`

**Dev server won't start?**
- Check Node.js version: `node --version` (need 20.19+ or 22.12+)
- Try: `npm install` again

**Build errors?**
- Run: `npm run lint` to check for issues

---

## 📚 More Help?

- **Full Documentation:** See `README.md`
- **Setup Details:** See `SETUP_INSTRUCTIONS.md`
- **Deployment Guide:** See `DEPLOYMENT_CHECKLIST.md`
- **Project Info:** See `PROJECT_SUMMARY.md`

---

## 🎉 Enjoy your new website!

Need help? Check the documentation files or test locally before deploying.
