# 👨‍💻 Developer Guide

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📁 Project Structure Explained

```
om-muruga-hostel/
│
├── public/                    # Static assets
│   ├── photos/               # Hostel images (to be copied)
│   └── vite.svg              # Default favicon
│
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Navbar.css       # Navbar styles
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Hero.css         # Hero styles
│   │   ├── About.jsx        # About section
│   │   ├── About.css        # About styles
│   │   ├── Rooms.jsx        # Rooms & pricing
│   │   ├── Rooms.css        # Rooms styles
│   │   ├── Facilities.jsx   # Facilities section
│   │   ├── Facilities.css   # Facilities styles
│   │   ├── Gallery.jsx      # Photo gallery
│   │   ├── Gallery.css      # Gallery styles
│   │   ├── Location.jsx     # Location & map
│   │   ├── Location.css     # Location styles
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Contact.css      # Contact styles
│   │   ├── Footer.jsx       # Footer section
│   │   └── Footer.css       # Footer styles
│   │
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

---

## 🎨 Styling Architecture

### CSS Organization
Each component has its own CSS file for:
- **Modularity:** Easy to maintain
- **Scoping:** Prevents style conflicts
- **Performance:** Only load what's needed

### Naming Convention
- **Classes:** kebab-case (e.g., `.hero-title`)
- **Components:** PascalCase (e.g., `Hero.jsx`)
- **Files:** PascalCase for components, lowercase for config

### Responsive Design
```css
/* Mobile First Approach */
.element {
  /* Mobile styles (default) */
}

@media (max-width: 768px) {
  /* Tablet and below */
}

@media (max-width: 968px) {
  /* Desktop and below */
}
```

---

## 🔧 Customization Guide

### Change Colors

**Find and replace these hex codes:**

```css
/* Primary Blue */
#1e3a8a → Your color

/* Accent Orange */
#fb923c → Your color

/* Success Green */
#22c55e → Your color

/* Background Gray */
#f8fafc → Your color

/* Text Slate */
#475569 → Your color
```

### Change Font

**In `src/index.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Add New Section

1. **Create component:**
```jsx
// src/components/NewSection.jsx
import './NewSection.css';

const NewSection = () => {
  return (
    <section id="new-section" className="new-section">
      <div className="container">
        <h2>New Section</h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Create styles:**
```css
/* src/components/NewSection.css */
.new-section {
  padding: 5rem 2rem;
  background: white;
}
```

3. **Import in App.jsx:**
```jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="App">
      {/* ... other components */}
      <NewSection />
      {/* ... */}
    </div>
  );
}
```

4. **Add to navigation:**
```jsx
// In Navbar.jsx
<a onClick={() => scrollToSection('new-section')} className="nav-link">
  New Section
</a>
```

---

## 📝 Component Props & State

### Navbar Component
```jsx
// State
const [isOpen, setIsOpen] = useState(false);

// Functions
toggleMenu() // Toggle mobile menu
scrollToSection(id) // Smooth scroll to section
```

### Gallery Component
```jsx
// State
const [selectedImage, setSelectedImage] = useState(null);

// Functions
openModal(image) // Open image in modal
closeModal() // Close modal
```

### Contact Component
```jsx
// State
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  roomType: 'non-ac',
  message: ''
});
const [errors, setErrors] = useState({});

// Functions
handleChange(e) // Update form data
validateForm() // Validate inputs
handleSubmit(e) // Submit to WhatsApp
```

---

## 🎯 Best Practices

### Component Structure
```jsx
import { useState } from 'react';
import { FaIcon } from 'react-icons/fa';
import './Component.css';

const Component = () => {
  // 1. State declarations
  const [state, setState] = useState(initialValue);

  // 2. Functions
  const handleAction = () => {
    // Logic here
  };

  // 3. Return JSX
  return (
    <section className="component">
      {/* Content */}
    </section>
  );
};

export default Component;
```

### CSS Structure
```css
/* 1. Section styles */
.section {
  padding: 5rem 2rem;
}

/* 2. Container styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* 3. Element styles */
.element {
  /* styles */
}

/* 4. Hover states */
.element:hover {
  /* hover styles */
}

/* 5. Media queries */
@media (max-width: 768px) {
  .element {
    /* responsive styles */
  }
}
```

---

## 🐛 Debugging Tips

### Common Issues

**1. Images not loading:**
```jsx
// ❌ Wrong
<img src="photos/room1.jpeg" />

// ✅ Correct
<img src="/photos/room 1.jpeg" />
```

**2. Smooth scroll not working:**
```jsx
// Make sure section has id
<section id="about" className="about">
```

**3. WhatsApp link not working:**
```jsx
// Format: https://wa.me/[country code][number]
// ❌ Wrong: https://wa.me/9876543210
// ✅ Correct: https://wa.me/919876543210
```

**4. Form validation errors:**
```jsx
// Check regex pattern
/^\d{10}$/.test(phone.replace(/\s/g, ''))
```

### Browser DevTools

**Inspect Element:**
- Right-click → Inspect
- Check CSS styles
- View console errors

**Responsive Testing:**
- F12 → Toggle device toolbar
- Test different screen sizes

**Network Tab:**
- Check image loading
- Monitor API calls

---

## 🚀 Performance Optimization

### Image Optimization
```jsx
// Use lazy loading
<img src="/photos/room1.jpeg" loading="lazy" alt="Room 1" />
```

### Code Splitting
```jsx
// Use dynamic imports for large components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### CSS Optimization
```css
/* Use transform instead of position for animations */
/* ❌ Slow */
.element:hover {
  top: -10px;
}

/* ✅ Fast */
.element:hover {
  transform: translateY(-10px);
}
```

---

## 🧪 Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Smooth scroll functions
- [ ] Form validation works
- [ ] WhatsApp links open correctly
- [ ] Phone links work on mobile
- [ ] Gallery modal opens/closes
- [ ] All images load

### Responsive
- [ ] Mobile menu works
- [ ] Layout adapts to screen size
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are tappable

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## 📚 Useful Resources

### React
- [React Docs](https://react.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Vite
- [Vite Docs](https://vitejs.dev/)
- [Vite Config](https://vitejs.dev/config/)

### CSS
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)

### Deployment
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

## 💡 Tips & Tricks

### Quick Edits
```bash
# Find all instances of a phone number
grep -r "+919876543210" src/

# Replace color across all files
find src/ -type f -exec sed -i 's/#1e3a8a/#yourcolor/g' {} +
```

### Git Workflow
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: OM Muruga Hostel website"

# Push to GitHub
git remote add origin your-repo-url
git push -u origin main
```

### Environment Variables
```bash
# Create .env file
VITE_PHONE_NUMBER=+919876543210
VITE_EMAIL=info@ommurugehostel.com

# Use in code
const phone = import.meta.env.VITE_PHONE_NUMBER;
```

---

## 🎓 Learning Path

### Beginner
1. Understand React basics
2. Learn component structure
3. Practice CSS styling
4. Modify existing components

### Intermediate
1. Add new sections
2. Customize colors/fonts
3. Integrate APIs
4. Add animations

### Advanced
1. Add backend integration
2. Implement booking system
3. Add payment gateway
4. Create admin panel

---

## 🤝 Contributing

### Code Style
- Use functional components
- Follow naming conventions
- Comment complex logic
- Keep components small
- Write clean CSS

### Git Commits
```bash
# Good commit messages
git commit -m "Add: New testimonials section"
git commit -m "Fix: Gallery modal close button"
git commit -m "Update: Contact form validation"
git commit -m "Style: Improve mobile responsiveness"
```

---

## 📞 Support

Need help? Check:
1. **README.md** - General documentation
2. **SETUP_INSTRUCTIONS.md** - Setup guide
3. **FEATURES.md** - Feature list
4. **PROJECT_SUMMARY.md** - Project overview

---

Happy coding! 🚀
