# Portfolio Images

## Image Requirements

This directory should contain your portfolio images. The website expects the following image files:

### Required Images (12 total)

- `01.webp` - Real Estate (e.g., Modern Luxury Home)
- `02.webp` - Business (e.g., Downtown Office Space)
- `03.webp` - Drone (e.g., Aerial Property View)
- `04.webp` - Real Estate (e.g., Apartment Complex)
- `05.webp` - Business (e.g., Industrial Warehouse)
- `06.webp` - Real Estate (e.g., Residential Video Tour)
- `07.webp` - Business (e.g., Business Headshots)
- `08.webp` - Drone (e.g., Aerial Site Survey)
- `09.webp` - Real Estate (e.g., Luxury Condo)
- `10.webp` - Business (e.g., Factory Interior)
- `11.webp` - Drone (e.g., Property Development)
- `12.webp` - Business (e.g., Commercial Building)

## Image Specifications

- **Format**: WebP (preferred) or JPG/PNG
- **Aspect Ratio**: 4:3 (recommended)
- **Minimum Size**: 800x600px
- **Recommended Size**: 1200x900px or larger
- **File Size**: Optimize for web (aim for < 500KB per image)

## Adding Your Images

1. Replace the placeholder filenames (01.webp through 12.webp) with your actual portfolio images
2. Ensure filenames match exactly (case-sensitive)
3. Optimize images for web performance
4. Update portfolio data in `/js/main.js` if you change titles, categories, or descriptions

## Fallback

If an image fails to load, the website will display a placeholder SVG with the image title. This ensures the layout never breaks.

## Categories

Images are categorized as:
- `real-estate` - Residential and commercial property photography
- `business` - Corporate, industrial, and commercial photography
- `drone` - Aerial photography and videography

You can modify categories in the `PORTFOLIO_DATA` array in `/js/main.js`.
