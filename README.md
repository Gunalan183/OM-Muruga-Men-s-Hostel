# 🏠 OM Muruga Men's Hostel Website

A modern, fully responsive website for OM Muruga Men's Hostel in Koyambedu, Chennai. Built with React + Vite for optimal performance and user experience.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern UI/UX Design** - Clean, professional hostel booking style interface
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **Smooth Navigation** - Sticky navbar with smooth scroll to sections
- 💬 **WhatsApp Integration** - Floating WhatsApp button and contact form
- 🗺️ **Google Maps** - Embedded location map
- 🖼️ **Photo Gallery** - Interactive gallery with modal view
- 📞 **Click-to-Call** - Mobile-optimized call buttons
- 🔍 **SEO Optimized** - Meta tags for better search engine visibility

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Icons:** React Icons
- **Styling:** CSS Modules
- **Fonts:** Google Fonts (Poppins)

## 📂 Project Structure

```
om-muruga-hostel/
├── public/
│   └── photos/          # Hostel images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── Facilities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

1. **Navigate to project directory:**
```bash
cd om-muruga-hostel
```

2. **Install dependencies:**
```bash
npm install
```

3. **Copy photos to public folder:**

**Option 1 - Run the batch file (Windows):**
```bash
copy-photos.bat
```

**Option 2 - Manual copy:**
- Create `public/photos/` folder
- Copy all images from root `photos/` folder to `public/photos/`

4. **Start development server:**
```bash
npm run dev
```

5. **Open browser:**
Navigate to `http://localhost:5173/`

## 📄 Pages & Sections

### 🏠 Home (Hero Section)
- Eye-catching hero with hostel name and tagline
- Key highlights (rent, location, food)
- Call-to-action buttons (Call Now, WhatsApp)
- Quick info cards (AC/Non-AC, Food, WiFi, Security)

### ℹ️ About Us
- Hostel description and features
- Target audience (students & professionals)
- Statistics cards
- Key benefits

### 💰 Rooms & Rent
- **Non A/C Room:** ₹7,000/month (₹2,000 advance)
- **A/C Room:** ₹7,500/month (₹3,000 advance)
- Feature comparison
- Booking CTA

### 🍽️ Food & Facilities
**Food Services:**
- 3 times daily meals
- Lunch box provided
- Weekly 2 times non-veg
- 2 times tea

**Amenities:**
- Washing machine
- Free WiFi (Jio + Hathway)
- TV in common area
- RO drinking water
- Daily housekeeping
- CCTV monitored bike parking
- Iron box available

### 📸 Gallery
- Grid layout of hostel photos
- Hover zoom effects
- Modal view for full-size images
- Lazy loading for performance
- 18 photos total:
  - 15 room photos
  - 2 restroom photos
  - 1 visiting card

### 📍 Location
- Full address display
- Nearby landmarks (CMBT, Metro, restaurants)
- Google Maps integration
- Distance highlights

### 📞 Contact
- Contact form with validation
- Phone, WhatsApp, Email links
- Visit timings
- WhatsApp form submission

## 🎨 Design System

### Color Palette
- **Primary:** #1e3a8a (Dark Blue)
- **Accent:** #fb923c (Orange)
- **Success:** #22c55e (Green)
- **Background:** #f8fafc (Light Gray)
- **Text:** #475569 (Slate)

### Typography
- **Font Family:** Poppins
- **Weights:** 300, 400, 500, 600, 700

### Components
- Rounded corners (8px-16px)
- Soft shadows
- Smooth transitions (0.3s)
- Hover effects on interactive elements

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 968px
- **Desktop:** > 968px

## ⚙️ Configuration

### Update Contact Information

Replace placeholder phone number `+919876543210` in:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Update Email
Replace `info@ommurugehostel.com` in:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Update Google Maps
Replace the iframe src in `src/components/Location.jsx` with your actual location coordinates.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🔧 Customization

### Change Colors
Update color values in respective CSS files:
- Primary color: Search for `#1e3a8a`
- Accent color: Search for `#fb923c`

### Add/Remove Sections
Edit `src/App.jsx` to add or remove components.

### Modify Content
Each component file contains its own content. Edit the respective `.jsx` file in `src/components/`.

## 📊 Performance Optimizations

- ✅ Lazy loading images
- ✅ Smooth scroll behavior
- ✅ Optimized bundle size
- ✅ CSS modules for scoped styling
- ✅ React Icons tree-shaking
- ✅ Vite's fast HMR

## 🐛 Troubleshooting

### Images not showing
- Ensure photos are copied to `public/photos/` folder
- Check image file names match those in `Gallery.jsx`

### Dev server not starting
- Check Node.js version (should be 20.19+ or 22.12+)
- Delete `node_modules` and run `npm install` again

### Build errors
- Run `npm run lint` to check for code issues
- Ensure all dependencies are installed

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Built with ❤️ for OM Muruga Men's Hostel

## 🤝 Support

For support or queries:
- 📞 Phone: +91 98765 43210
- 💬 WhatsApp: +91 98765 43210
- 📧 Email: info@ommurugehostel.com

---

**Note:** Remember to update all placeholder contact information before deploying to production!
