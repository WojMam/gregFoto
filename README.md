# Visual Studio - Professional Photo & Video Portfolio Website

A complete, production-ready single-page website for a professional photo and video creator specializing in real estate and business photography.

## Features

- ✅ **Pure HTML/CSS/JS** - No frameworks, works on GitHub Pages
- ✅ **Modernist Design** - Clean, professional, cinematic aesthetic
- ✅ **Light/Dark Theme** - Toggle with persistent preference
- ✅ **Fully Responsive** - Mobile-first, premium iPhone experience
- ✅ **Accessible** - ARIA labels, keyboard navigation, focus management
- ✅ **Performance Optimized** - Lazy loading, optimized assets, Lighthouse-ready
- ✅ **SEO Ready** - Meta tags, structured data, sitemap, robots.txt

## Sections

1. **Sticky Navigation** - Smooth scroll, active link highlighting, mobile hamburger menu
2. **Hero Section** - Strong headline, CTAs, trust chips, scroll hint
3. **Services** - 4 service cards with micro CTAs
4. **Portfolio** - Filterable grid with lightbox modal
5. **Process** - 4-step workflow visualization
6. **Testimonials** - 3 client testimonials with results
7. **FAQ** - Accordion component with smooth animations
8. **Contact** - Working form (Formspree) with validation
9. **Footer** - Social links and copyright

## Setup Instructions

### 1. GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select your branch (usually `main` or `master`)
4. Your site will be live at `https://yourusername.github.io/gregFoto/`

### 2. Update Configuration

Edit `/js/main.js` and update the `CONFIG` object:

```javascript
const CONFIG = {
    brandName: 'Your Brand Name',
    phone: '+1 (555) 0123',
    email: 'your@email.com',
    formEndpoint: 'https://formspree.io/f/yourformid',
    // ... social links
};
```

### 3. Set Up Formspree

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form endpoint URL
5. Replace `https://formspree.io/f/xxxxxxx` in `index.html` and `main.js`

### 4. Add Portfolio Images

1. Add your images to `/assets/img/portfolio/`
2. Name them: `01.webp`, `02.webp`, ... `12.webp`
3. See `/assets/img/portfolio/README.md` for specifications
4. Update portfolio data in `/js/main.js` if needed

### 5. Update Meta Tags

Edit `index.html` and update:
- Open Graph URLs (replace `yourusername`)
- Canonical URL
- Structured data (address, coordinates, etc.)

### 6. Customize Branding

- **Brand Name**: Update in `index.html` (nav-brand) and `main.js` (CONFIG)
- **Colors**: Edit CSS variables in `/css/styles.css` (`:root` section)
- **Fonts**: Currently using Inter from Google Fonts (already included)

## File Structure

```
gregFoto/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles, design system, themes
├── js/
│   └── main.js             # All JavaScript functionality
├── assets/
│   └── img/
│       └── portfolio/     # Portfolio images (add your images here)
├── favicon.svg             # Site favicon
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
└── README.md               # This file
```

## Customization Guide

### Colors

Edit CSS variables in `/css/styles.css`:

```css
:root {
    --color-primary: #2563eb;        /* Main accent color */
    --color-primary-dark: #1e40af;   /* Darker shade */
    --color-primary-light: #3b82f6;  /* Lighter shade */
    /* ... more colors */
}
```

### Typography

The site uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Update `--font-family` in CSS variables

### Spacing & Layout

All spacing uses a consistent scale defined in CSS variables. Adjust as needed in `/css/styles.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use WebP format, compress images before uploading
2. **Lazy Loading**: Already implemented for portfolio images
3. **Minify**: Consider minifying CSS/JS for production (optional)
4. **CDN**: Consider using a CDN for assets (optional)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Reduced motion support

## License

This is a template/starting point. Customize freely for your use.

## Support

For issues or questions:
1. Check the code comments in each file
2. Review the configuration section in `main.js`
3. Ensure all file paths are correct for your GitHub Pages setup

---

**Note**: Remember to replace all placeholder content (URLs, contact info, images) before going live!
