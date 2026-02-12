# OM Muruga Men's Hostel Website - Setup Instructions

## 📋 Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm or yarn

## 🚀 Installation Steps

### 1. Install Dependencies
```bash
cd om-muruga-hostel
npm install react-icons
```

### 2. Copy Photos
Copy all photos from the `photos` folder to `om-muruga-hostel/public/photos/`:

**Windows (Command Prompt):**
```cmd
xcopy ..\photos public\photos\ /E /I /Y
```

**Windows (PowerShell):**
```powershell
Copy-Item -Path ..\photos\* -Destination public\photos\ -Recurse -Force
```

**Manual Method:**
1. Create a folder named `photos` inside `om-muruga-hostel/public/`
2. Copy all .jpeg files from the root `photos` folder
3. Paste them into `om-muruga-hostel/public/photos/`

### 3. Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

## 📱 Features Implemented

✅ Fully responsive design (mobile-first)
✅ Modern UI with Poppins font
✅ Sticky navigation bar
✅ Smooth scroll navigation
✅ Hero section with CTA buttons
✅ About Us section
✅ Rooms & Pricing cards
✅ Food & Facilities grid
✅ Photo gallery with modal view
✅ Google Maps integration
✅ Contact form with validation
✅ Floating WhatsApp button
✅ SEO-friendly meta tags
✅ Hover effects & animations

## 🎨 Color Scheme
- Primary: Dark Blue (#1e3a8a)
- Accent: Orange (#fb923c)
- Success: Green (#22c55e)

## 📞 Update Contact Information

Before deploying, update the phone number in these files:
- `src/components/Navbar.jsx` (line 38)
- `src/components/Hero.jsx` (lines 26, 29)
- `src/components/Contact.jsx` (lines 60, 82, 95)
- `src/components/Footer.jsx` (lines 21, 24, 60)

Replace `+919876543210` with the actual phone number.

## 🌐 Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📦 Deploy
You can deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🔧 Customization
- Colors: Update in respective CSS files
- Content: Edit component files in `src/components/`
- Images: Replace files in `public/photos/`

## 📝 Notes
- All images are lazy-loaded for better performance
- Mobile-optimized with responsive breakpoints
- WhatsApp integration for easy enquiries
- Google Maps embedded for location
