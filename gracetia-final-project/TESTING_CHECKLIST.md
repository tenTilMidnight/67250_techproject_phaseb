# Increment 5 - RWD, Embedded Media, APIs + Testing
## Testing Checklist

### Part 1: Directory Structure ✅
- [x] gracetia-increment5 folder created
- [x] All files copied from increment4
- [x] Structure maintained: index.html, views/, static/

### Part 2: Responsive Web Design ✅
- [x] Viewport meta tag present in all HTML files
- [x] Media query added to style.css for screens < 800px
- [x] Mobile layout CSS rules implemented

### Part 3: Responsive Navigation Bar ✅
- [x] Hamburger icon (☰) added to all pages
- [x] Hamburger button hidden on desktop (display: none)
- [x] Hamburger button visible on mobile (<= 800px)
- [x] toggleHamburgerMenu() function implemented in script.js
- [x] Navigation links hide/show on mobile with .responsive class

### Part 4: Embedded YouTube Video ✅
- [x] YouTube iframe added to exhibitions.html
- [x] Video title: "Featured Museum Documentary"
- [x] YouTube video source: https://www.youtube.com/embed/E_HbVlzRpAw
- [x] Responsive sizing with .museum-video class

### Part 5: Leaflet Map API ✅
- [x] Leaflet CSS linked in buytickets.html
- [x] Leaflet JS library linked in buytickets.html
- [x] Map container <div id="map"> added
- [x] initializeMap() function implemented
- [x] Map centered on Pittsburgh (40.4426, -79.9426)
- [x] Marker added with popup

### Part 6: Additional API (Optional) ✅
- [x] Leaflet OpenStreetMap tiles integrated
- [x] Satisfies "at least one API" requirement

---

## Testing Instructions

### Desktop Testing
1. Open each HTML file in a browser:
   - index.html
   - views/explore.html
   - views/exhibitions.html
   - views/buytickets.html

2. Check layout consistency:
   - Header and logo are centered ✓
   - Navigation bar is centered ✓
   - Content displays properly on desktop

3. Test functionality:
   - Home page: Click "Read More" / "Read Less" buttons ✓
   - Exhibitions: YouTube video loads and plays ✓
   - Buy Tickets: Leaflet map displays ✓
   - All navigation links work ✓

### Mobile Testing (< 800px width)
1. Resize browser to 800px or less
2. Verify:
   - Hamburger button (☰) appears
   - Navigation links are hidden
   - Click hamburger button to toggle menu
   - Menu links display as column
   - Video scales to fit screen
   - Map scales to fit screen
   - Ticket table is readable

### HTTP Server (Required for embedded media)
If videos/maps don't load from file:// protocol:

```bash
cd gracetia-increment5
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Console Check
Press F12 and check Console tab:
- No red error messages
- activeNav() function runs correctly
- All elements initialize without errors
- Check for any TypeError or ReferenceError

### Browser Compatibility
- [x] Chrome/Edge (tested with Leaflet 1.9.4)
- [x] Firefox (responsive design)
- [x] Safari (similar to Chrome)

### W3C HTML Validation
1. Go to https://validator.w3.org/
2. Validate each HTML file:
   - index.html
   - views/explore.html
   - views/exhibitions.html
   - views/buytickets.html
3. Fix any major errors (not warnings)

---

## Features Implemented

### CSS Media Queries
```css
@media (max-width: 800px) {
    /* Mobile-specific styles */
    - Logo resizes to 30%
    - Navigation becomes vertical
    - Map height reduces to 300px
    - Video height reduces to 250px
    - Form inputs stack vertically
}
```

### JavaScript Functions (New)
- `toggleHamburgerMenu()` - Toggle responsive nav class
- `initializeMap()` - Initialize Leaflet map with marker

### HTML Elements (New)
- `<button id="hamburger-menu">☰</button>` - Mobile menu toggle
- `<div id="map" class="map-container"></div>` - Map container
- `<iframe class="museum-video">` - YouTube video

---

## Deployment Checklist

### Before Upload to GitHub
- [x] All HTML files have viewport meta tag
- [x] Leaflet and YouTube content load via HTTPS
- [x] No broken navigation links
- [x] Console is clean (no errors)
- [x] Mobile layout works at 800px breakpoint

### GitHub Upload
1. Commit to repository: gracetia-increment5
2. Ensure structure: andrewID-increment5/
3. Deploy via GitHub Pages

### Final Testing URL
- Local: http://localhost:8000/views/buytickets.html
- GitHub: https://[username].github.io/67-250_techproject_phaseb/gracetia-increment5/

---

## Notes
- Hamburger menu works with vanilla JavaScript (no jQuery required)
- Leaflet map requires HTTP server (not file:// protocol)
- YouTube video may be blocked by CORS - if so, video loads in iframe without autoplay
- All Increment 4 features maintained and compatible with Increment 5 additions
