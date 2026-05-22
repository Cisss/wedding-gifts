# 📂 File Structure Guide

## Overview

The wedding gift website is now organized by language for better maintainability and clarity.

## Directory Structure

```
wedding-gifts/
│
├── 📄 index.html                    # Main entry point (Dutch)
│
├── 📁 nl/                           # Dutch (Nederlands)
│   ├── index.html                   # Homepage
│   ├── payment.html                 # Payment page
│   ├── thank-you.html               # Thank you page
│   └── dreams/
│       ├── house.html               # Dream: Help with house
│       ├── wedding.html             # Dream: Help with wedding
│       ├── honeymoon.html           # Dream: Help with honeymoon
│       └── baby.html                # Dream: Help with baby
│
├── 📁 en/                           # English
│   ├── index.html                   # Homepage
│   ├── payment.html                 # Payment page
│   ├── thank-you.html               # Thank you page
│   └── dreams/
│       ├── house.html               # Dream: Help with house
│       ├── wedding.html             # Dream: Help with wedding
│       ├── honeymoon.html           # Dream: Help with honeymoon
│       └── baby.html                # Dream: Help with baby
│
├── 📁 pl/                           # Polish (Polski)
│   ├── index.html                   # Homepage
│   ├── payment.html                 # Payment page
│   ├── thank-you.html               # Thank you page
│   └── dreams/
│       ├── house.html               # Dream: Help with house
│       ├── wedding.html             # Dream: Help with wedding
│       ├── honeymoon.html           # Dream: Help with honeymoon
│       └── baby.html                # Dream: Help with baby
│
├── 📁 css/
│   └── styles.css                   # All styles (shared across languages)
│
├── 📁 js/
│   └── script.js                    # JavaScript (shared across languages)
│
├── 📁 assets/
│   └── README.md                    # Image placement guide
│       (place all your images here)
│
└── 📁 Documentation
    ├── README.md                    # Complete documentation
    └── QUICK-START.md               # Quick setup guide
```

## How It Works

### Language Organization
- Each language has its own folder (nl/, en/, pl/)
- All pages for that language are inside its folder
- Language switcher in the top right corner allows switching between versions

### Shared Resources
- **CSS**: All languages share the same `css/styles.css` file
- **JavaScript**: All languages share the same `js/script.js` file
- **Assets**: All images are stored in the `assets/` folder

### File Paths

#### From root index.html:
- CSS: `css/styles.css`
- JS: `js/script.js`
- Assets: `assets/image.jpg`
- Languages: `nl/index.html`, `en/index.html`, `pl/index.html`

#### From language pages (nl/index.html, en/index.html, pl/index.html):
- CSS: `../css/styles.css`
- JS: `../js/script.js`
- Assets: `../assets/image.jpg`
- Dreams: `dreams/house.html`
- Other languages: `../en/index.html`, `../pl/index.html`

#### From dream pages (nl/dreams/house.html, etc.):
- CSS: `../../css/styles.css`
- JS: `../../js/script.js`
- Assets: `../../assets/image.jpg`
- Back to index: `../index.html`
- Other languages: `../../en/dreams/house.html`

## Language Switcher

The language switcher appears in the top right of every page and dynamically updates:

- **Dutch pages**: Points to `../index.html`, `../en/...`, `../pl/...`
- **English pages**: Points to `../index.html`, `en/...`, `../pl/...`
- **Polish pages**: Points to `../index.html`, `../en/...`, `pl/...`
- **Dream pages**: Points to equivalent pages in other languages

## Customization

### To update all languages:
1. **Images**: Add once to `assets/`, reference from all language pages
2. **Styles**: Edit `css/styles.css` (affects all languages)
3. **Payment links**: Update in each language's `payment.html`
4. **Google Forms**: Embed in each language's dream pages
5. **Text content**: Edit individually in each language folder

### To add a new language:
1. Create a new folder (e.g., `de/` for German)
2. Copy the structure from `nl/`, `en/`, or `pl/`
3. Translate all text content
4. Update language switcher in all existing pages
5. Update paths to use `../css/`, `../js/`, `../assets/`

## Benefits of This Structure

✅ **Clear organization** - Easy to find files by language  
✅ **Easy maintenance** - Update styles/scripts once for all languages  
✅ **Scalable** - Easy to add more languages  
✅ **Clean URLs** - Language appears in URL (e.g., `/nl/`, `/en/`, `/pl/`)  
✅ **Consistent** - Same structure repeated for each language  
✅ **SEO friendly** - Clear language separation for search engines  

## Publishing

When uploading to a web server:
- Upload the entire folder structure as-is
- The root `index.html` will be your main entry point
- All language versions will be accessible at:
  - `yoursite.com/` (Dutch)
  - `yoursite.com/nl/` (Dutch alternative)
  - `yoursite.com/en/` (English)
  - `yoursite.com/pl/` (Polish)

## Need Help?

See the main [README.md](README.md) for detailed setup instructions.
