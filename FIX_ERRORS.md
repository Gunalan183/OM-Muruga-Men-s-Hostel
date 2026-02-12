# 🔧 Fix Common Errors

## ❌ Error: "Failed to resolve import react-icons/fa"

### Problem
The `react-icons` package is not installed.

### Solution

**Step 1:** Open a terminal/command prompt

**Step 2:** Navigate to the project folder
```cmd
cd "G:\Project\OM Murugaa Pg Mens Hostel\om-muruga-hostel"
```

**Step 3:** Install dependencies

**Option A - Run the batch file:**
```cmd
INSTALL_DEPENDENCIES.bat
```

**Option B - Manual install:**
```cmd
npm install
```

**Step 4:** Restart the dev server
```cmd
npm run dev
```

---

## ❌ Error: Images not showing in Gallery

### Problem
Photos are not copied to the public folder.

### Solution

**Step 1:** Navigate to project folder
```cmd
cd "G:\Project\OM Murugaa Pg Mens Hostel\om-muruga-hostel"
```

**Step 2:** Run the copy script

**Option A - Batch file:**
```cmd
copy-photos.bat
```

**Option B - PowerShell:**
```powershell
.\copy-photos.ps1
```

**Option C - Manual:**
1. Create folder: `public\photos\`
2. Copy all `.jpeg` files from parent `photos` folder
3. Paste into `public\photos\`

---

## ❌ Error: "npm: command not found"

### Problem
Node.js is not installed or not in PATH.

### Solution

1. Download Node.js from: https://nodejs.org/
2. Install Node.js (LTS version recommended)
3. Restart your terminal
4. Verify installation:
```cmd
node --version
npm --version
```

---

## ❌ Error: Port 5173 already in use

### Problem
Another process is using port 5173.

### Solution

**Option A - Kill the process:**
```cmd
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

**Option B - Use different port:**
```cmd
npm run dev -- --port 3000
```

---

## ❌ Error: "EACCES: permission denied"

### Problem
Insufficient permissions.

### Solution

**Windows:**
- Run terminal as Administrator
- Right-click Command Prompt → "Run as administrator"

---

## ❌ Error: Build fails

### Problem
Code errors or missing dependencies.

### Solution

**Step 1:** Check for errors
```cmd
npm run lint
```

**Step 2:** Clean install
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

**Step 3:** Try building again
```cmd
npm run build
```

---

## ❌ Error: WhatsApp links not working

### Problem
Phone number format is incorrect.

### Solution

Update phone number in these files:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

**Correct format:**
```jsx
// ✅ Correct
href="https://wa.me/919876543210"

// ❌ Wrong
href="https://wa.me/9876543210"
href="https://wa.me/+919876543210"
```

---

## ❌ Error: Smooth scroll not working

### Problem
Section IDs don't match navigation links.

### Solution

Verify each section has the correct `id`:
```jsx
<section id="home">     // ✅
<section id="about">    // ✅
<section id="rooms">    // ✅
<section id="facilities"> // ✅
<section id="gallery">  // ✅
<section id="location"> // ✅
<section id="contact">  // ✅
```

---

## ❌ Error: Form validation not working

### Problem
JavaScript errors in Contact component.

### Solution

Check browser console (F12) for errors and verify:
```jsx
// Phone validation regex
/^\d{10}$/.test(phone.replace(/\s/g, ''))
```

---

## 🆘 Still Having Issues?

### Check These:

1. **Node.js version:**
```cmd
node --version
```
Should be v20.19+ or v22.12+

2. **Clear cache:**
```cmd
npm cache clean --force
```

3. **Delete and reinstall:**
```cmd
rmdir /s /q node_modules
npm install
```

4. **Check file paths:**
- Ensure no typos in import statements
- Verify file names match exactly (case-sensitive)

5. **Browser cache:**
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + F5)

---

## 📝 Quick Checklist

Before asking for help, verify:

- [ ] Node.js is installed (v20.19+ or v22.12+)
- [ ] You're in the correct directory (`om-muruga-hostel`)
- [ ] `npm install` completed successfully
- [ ] Photos are copied to `public/photos/`
- [ ] No typos in file names or imports
- [ ] Browser cache is cleared
- [ ] Dev server is running (`npm run dev`)

---

## 💡 Pro Tips

### Restart Everything
```cmd
# Stop dev server (Ctrl + C)
# Clear everything
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

### Check What's Running
```cmd
# Windows
netstat -ano | findstr :5173

# Kill process
taskkill /PID [PID] /F
```

### Fresh Start
```cmd
# Close all terminals
# Delete node_modules folder
# Delete package-lock.json
# Open new terminal
npm install
npm run dev
```

---

## 📞 Need More Help?

1. Check `README.md` for full documentation
2. Review `DEVELOPER_GUIDE.md` for technical details
3. See `SETUP_INSTRUCTIONS.md` for setup steps
4. Read `PROJECT_SUMMARY.md` for project overview

---

## ✅ Success Indicators

You'll know everything is working when:
- ✅ Dev server starts without errors
- ✅ Website opens at http://localhost:5173/
- ✅ All images load in gallery
- ✅ Navigation works smoothly
- ✅ WhatsApp buttons open correctly
- ✅ Form validation works
- ✅ No console errors (F12)

---

**Remember:** Most errors are fixed by running `npm install` in the correct directory!
