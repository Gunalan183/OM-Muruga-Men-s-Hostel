# 🚀 Deployment Checklist

Before deploying your OM Muruga Men's Hostel website to production, complete this checklist:

## ✅ Pre-Deployment Tasks

### 1. Update Contact Information
- [ ] Replace `+919876543210` with actual phone number in:
  - [ ] `src/components/Navbar.jsx` (line 38)
  - [ ] `src/components/Hero.jsx` (lines 26, 29)
  - [ ] `src/components/Contact.jsx` (lines 60, 82, 95)
  - [ ] `src/components/Footer.jsx` (lines 21, 24, 60)

- [ ] Replace `info@ommurugehostel.com` with actual email in:
  - [ ] `src/components/Contact.jsx` (line 98)
  - [ ] `src/components/Footer.jsx` (line 56)

### 2. Verify Photos
- [ ] All photos copied to `public/photos/` folder
- [ ] Photos display correctly in Gallery section
- [ ] Image file names match those in `Gallery.jsx`

### 3. Test Functionality
- [ ] Navigation menu works on mobile and desktop
- [ ] Smooth scroll to all sections
- [ ] Contact form validation works
- [ ] WhatsApp links open correctly
- [ ] Phone call links work on mobile
- [ ] Google Maps loads properly
- [ ] Gallery modal opens and closes
- [ ] All hover effects work

### 4. Content Review
- [ ] Check all text for typos
- [ ] Verify rent prices are correct
- [ ] Confirm address is accurate
- [ ] Review facilities list
- [ ] Check nearby places information

### 5. SEO & Meta Tags
- [ ] Update meta description in `index.html` if needed
- [ ] Add favicon (replace `vite.svg` in public folder)
- [ ] Verify page title is correct

### 6. Performance Check
- [ ] Run `npm run build` successfully
- [ ] Check bundle size
- [ ] Test loading speed
- [ ] Verify images are optimized

### 7. Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### 8. Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1200px+)
- [ ] Large screens (1920px+)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd om-muruga-hostel
vercel
```

### Option 2: Netlify (Free)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: GitHub Pages (Free)
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📋 Post-Deployment Tasks

- [ ] Test live website on actual domain
- [ ] Verify all links work on production
- [ ] Test WhatsApp integration with real number
- [ ] Check Google Maps on live site
- [ ] Test contact form submission
- [ ] Share website link with stakeholders
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console (optional)

## 🔒 Security Checklist

- [ ] No sensitive data in code
- [ ] Environment variables properly configured
- [ ] HTTPS enabled on domain
- [ ] Contact form has spam protection (if using backend)

## 📱 Marketing Checklist

- [ ] Add website link to Google My Business
- [ ] Share on social media
- [ ] Add to hostel listing websites
- [ ] Print QR code for visiting card
- [ ] Update business cards with website URL

## 🎉 Launch!

Once all items are checked, you're ready to launch! 🚀

---

**Need Help?**
- Review `README.md` for detailed instructions
- Check `SETUP_INSTRUCTIONS.md` for setup steps
- Test locally before deploying: `npm run dev`
