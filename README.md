# Rockman Contractors - Painting & Decorating Website

A modern, mobile-first marketing website for Rockman Contractors, a painting and decorating business serving the Central Coast, NSW, Australia.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Mobile-First**: Fully responsive and optimized for mobile devices
- **Animations**: Smooth scroll animations and interactions with Framer Motion
- **Performance**: Optimized for fast loading and smooth user experience
- **SEO Ready**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant with proper focus states and semantic HTML

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Utility-First CSS Framework
- **Framer Motion** - Animation Library
- **Inter Font** - Modern Typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rockman-contractors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── ValueProps.jsx  # Value propositions
│   ├── FeaturedServices.jsx # Services showcase
│   ├── QuoteProcess.jsx # 3-step process
│   ├── Gallery.jsx     # Project gallery
│   ├── ImageModal.jsx  # Lightbox modal
│   ├── Testimonials.jsx # Customer reviews
│   ├── ServiceAreas.jsx # Coverage areas
│   ├── FAQ.jsx         # Frequently asked questions
│   ├── ContactCTA.jsx  # Contact form and info
│   └── Footer.jsx      # Site footer
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Brand Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'brand-navy': '#0F172A',
  'brand-emerald': '#10B981', 
  'brand-off-white': '#F8FAFC',
}
```

### Content Updates

- **Services**: Update the `services` array in `FeaturedServices.jsx`
- **Testimonials**: Update the `testimonials` array in `Testimonials.jsx`
- **FAQ**: Update the `faqs` array in `FAQ.jsx`
- **Service Areas**: Update the `suburbs` array in `ServiceAreas.jsx`

### Contact Information

Update the WhatsApp and phone number links throughout the components:

```javascript
// Replace with actual contact details
href="https://wa.me/61XXXXXXXXX?text=Hi%20Rockman%20Contractors..."
href="tel:+61XXXXXXXXX"
```

### Images

Replace placeholder images in the components with actual project photos:

- Hero background images
- Service images
- Gallery images
- Testimonial avatars

## Performance Optimizations

- **Lazy Loading**: Images use `loading="lazy"` attribute
- **Code Splitting**: Vendor libraries are split into separate chunks
- **Animation Optimization**: Uses `prefers-reduced-motion` for accessibility
- **Scroll Performance**: Optimized scroll event listeners with throttling

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is created for Rockman Contractors. All rights reserved.

## Support

For technical support or questions about customization, please contact the development team.