# 📸 Photo Gallery - Complete List

## Total Photos: 18

All photos from the `photos` folder are included in the gallery.

---

## 🏠 Room Photos (15 images)

1. **room 1.jpeg** - Comfortable Room View 1
2. **room 2.jpeg** - Comfortable Room View 2
3. **room 3.jpeg** - Comfortable Room View 3
4. **room 4.jpeg** - Comfortable Room View 4
5. **room 5.jpeg** - Comfortable Room View 5
6. **room 6.jpeg** - Comfortable Room View 6
7. **room 7.jpeg** - Comfortable Room View 7
8. **room 8.jpeg** - Comfortable Room View 8
9. **room 9.jpeg** - Comfortable Room View 9
10. **room 10.jpeg** - Comfortable Room View 10
11. **room11.jpeg** - Comfortable Room View 11
12. **room12.jpeg** - Comfortable Room View 12
13. **room13.jpeg** - Comfortable Room View 13
14. **room14.jpeg** - Comfortable Room View 14
15. **room15.jpeg** - Comfortable Room View 15

---

## 🚿 Restroom Photos (2 images)

16. **restroom .jpeg** - Clean Restroom Facility
17. **restroom2.jpeg** - Modern Restroom

---

## 📇 Contact Information (1 image)

18. **Visiting card.jpeg** - Contact Information

---

## 📂 File Locations

**Source:** `G:\Project\OM Murugaa Pg Mens Hostel\photos\`

**Destination:** `om-muruga-hostel\public\photos\`

---

## 🔄 How to Copy Photos

### Method 1: Batch File
```cmd
copy-photos.bat
```

### Method 2: PowerShell
```powershell
.\copy-photos.ps1
```

### Method 3: Manual
1. Create folder: `public\photos\`
2. Copy all 18 `.jpeg` files from `photos\` folder
3. Paste into `public\photos\`

---

## ✅ Verification

After copying, verify that `public\photos\` contains:
- ✓ 15 room photos (room 1.jpeg through room15.jpeg)
- ✓ 2 restroom photos (restroom .jpeg, restroom2.jpeg)
- ✓ 1 visiting card (Visiting card.jpeg)
- **Total: 18 files**

---

## 🎨 Gallery Features

- **Grid Layout:** Responsive 3-4 column grid
- **Hover Effect:** Zoom animation on hover
- **Modal View:** Click to view full-size image
- **Lazy Loading:** Images load as you scroll
- **Categories:** Organized by type (rooms, facilities, info)
- **Alt Text:** Descriptive text for accessibility

---

## 📝 Notes

- All photos are displayed in the gallery section
- Photos are lazy-loaded for better performance
- Modal lightbox allows viewing full-size images
- Responsive design works on all devices
- Images maintain aspect ratio

---

## 🔧 Customization

To add more photos:
1. Add `.jpeg` files to `photos\` folder
2. Update `src/components/Gallery.jsx`
3. Add new entries to the `images` array:
```jsx
{ src: '/photos/newphoto.jpeg', alt: 'Description', category: 'rooms' }
```

To remove photos:
1. Delete from `public\photos\` folder
2. Remove entry from `images` array in `Gallery.jsx`

---

## 🎯 Photo Categories

- **rooms** - Room interior photos
- **facilities** - Restroom and common area photos
- **info** - Contact and information cards

---

**All 18 photos are ready to be displayed in your gallery!** 📸
