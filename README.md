# Wedding Gift Website - Cisca & Magdalena

A beautiful, romantic static website where wedding guests can contribute to your dreams.

## 🌸 Features

- **Elegant & Romantic Design** - Soft color palette with warm ivory, beige, blush pink, and muted gold
- **Fully Responsive** - Beautiful on mobile, tablet, and desktop
- **No Framework Required** - Pure HTML, CSS, and minimal JavaScript
- **Easy to Customize** - Clear comments throughout for customization
- **Google Forms Integration** - Collect guest information elegantly
- **Payment Integration** - ING/Tikkie payment links and QR codes

## 📁 File Structure

```
wedding-gifts/
├── index.html              # Homepage (Dutch - main entry point)
├── nl/                     # Dutch language pages
│   ├── index.html
│   ├── payment.html
│   ├── thank-you.html
│   └── dreams/
│       ├── house.html
│       ├── wedding.html
│       ├── honeymoon.html
│       └── baby.html
├── en/                     # English language pages
│   ├── index.html
│   ├── payment.html
│   ├── thank-you.html
│   └── dreams/
│       ├── house.html
│       ├── wedding.html
│       ├── honeymoon.html
│       └── baby.html
├── pl/                     # Polish language pages
│   ├── index.html
│   ├── payment.html
│   ├── thank-you.html
│   └── dreams/
│       ├── house.html
│       ├── wedding.html
│       ├── honeymoon.html
│       └── baby.html
├── css/
│   └── styles.css          # Complete styling with CSS variables
├── js/
│   └── script.js           # Minimal JavaScript for enhancements
├── assets/                 # Your images go here
└── README.md               # This file
```

## 🚀 Quick Start

1. **Download or clone** this project to your computer
2. **Open `index.html`** in your browser to see the website
3. **Follow the customization steps** below

## ✨ Customization Guide

### 1. Add Your Photos

Replace the placeholder image comments with your actual photos:

**Homepage (`index.html`):**
- Look for comments like `<!-- REPLACE WITH YOUR HOUSE PHOTO -->`
- Add your images to the `assets/` folder
- Uncomment and update the `<img>` tags

Example:
```html
<img src="assets/house.jpg" alt="Ons droomhuis">
```

**Dream Pages (in `nl/dreams/`, `en/dreams/`, `pl/dreams/`):**
- Each dream page has a hero section - add a background image or photo
- Look for the `<!-- REPLACE WITH YOUR ... PHOTO -->` comments
- Update image paths relative to the page location

**Recommended image sizes:**
- Dream card images: 600x400px
- Hero background images: 1920x800px
- Thank you photo: 800x600px

### 2. Configure Google Forms

For each dream page, you need to create and embed a Google Form:

**Step-by-step:**
1. Go to [Google Forms](https://forms.google.com/)
2. Create a new form with fields like:
   - Name
   - Email (optional)
   - Message (optional)
   - Which dream are you contributing to? (if using one form for all)
3. Click **Send** → Click the **`<>`** (embed) icon
4. Copy the iframe code
5. Paste it in the dream pages (in nl/dreams/, en/dreams/, pl/dreams/) where you see:
   ```html
   <!-- PASTE YOUR GOOGLE FORMS EMBED CODE HERE -->
   ```

**Important:** Configure the form to redirect to the payment page after submission:
- Option 1: Use Google Forms settings to show a custom confirmation message with a link
- Option 2: Use a Google Forms add-on like "Form Publisher" or "FormLimiter"
- Option 3: Use Google Apps Script to redirect (advanced)

The redirect URL should be: `../payment.html`

### 3. Add Payment Links

**On payment pages (`nl/payment.html`, `en/payment.html`, `pl/payment.html`):**

Find this section:
```html
<!-- PASTE YOUR ING/TIKKIE PAYMENT LINK HERE -->
```

**Steps:**
1. Open your ING or Tikkie app
2. Create a payment request
3. Copy the payment link (e.g., `https://tikkie.me/pay/your-code`)
4. Replace the `#` in the href:
   ```html
   <a href="https://tikkie.me/pay/your-code" class="btn btn-primary btn-large">
     Open betaalverzoek
   </a>
   ```

### 4. Add QR Code (Optional)

**Generate QR Code:**
1. Use the Tikkie/ING app to generate a QR code, OR
2. Use a QR code generator like [QR Code Generator](https://www.qr-code-generator.com/)
3. Save the QR image to `assets/payment-qr.png`
4. Uncomment the image tag in all payment pages:
   ```html
   <img src="../assets/payment-qr.png" alt="Scan om te betalen">
   ```
   Note: The path uses `../assets/` because payment pages are in language folders.

### 5. Update Bank Details
all payment pages (`nl/payment.html`, `en/payment.html`, `pl/payment.html`)
In `payment.html`, update the manual transfer information:
```html
<p><strong>Rekeningnummer:</strong> NL00 INGB 0000 0000 00</p>
<p><strong>Ten name van:</strong> Cisca & Magdalena</p>
```

Replace with your actual bank details.

### 6. Customize Text & Names

**Update throughout all files:**
- Names: "Cisca & Magdalena" (search and replace if needed)
- Wedding date: Uncomment and update in footers
- Dream descriptions: Edit the text in each dream page
- Hero intro text: Edit in `index.html`

### 7. Customize Colors (Optional)
css/
All colors are defined in `styles.css` using CSS variables:

```css
:root {
  --color-ivory: #FAF7F2;
  --color-beige: #E8DCC4;
  --color-blush: #F4E4E0;
  --color-rose: #E6C9C3;
  --color-gold: #D4AF37;
  /* ... more colors */
}
```

Change these values to match your preferred color scheme.

## 🌐 Publishing Your Website

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub account if you don't have one
2. Create a new repository called `wedding-gifts`
3. Upload all your files
4. Go to Settings → Pages
5. Select main branch as source
6. Your site will be live at `https://yourusername.github.io/wedding-gifts/`

### Option 2: Netlify (Free)

1. Create a [Netlify](https://www.netlify.com/) account
2. Drag and drop your project folder
3. Get a free `https://yoursite.netlify.app` URL
4. Optionally add a custom domain

### Option 3: Traditional Web Hosting

Upload all files to your web hosting via FTP, maintaining the folder structure.

## 📱 Testing

Before publishing:
1. ✅ Test on mobile (use Chrome DevTools mobile view)
2. ✅ Test all links work
3. ✅ Test Google Forms submit properly
4. ✅ Test payment links open correctly
5. ✅ Check all images load
6. ✅ Verify text has no typos

## 🎨 Design Features

- **Mobile-first responsive design**
- **Elegant typography** (Playfair Display + Lora)
- **Soft shadows and rounded corners**
- **Smooth hover animations**
- **Accessible color contrast**
- **Semantic HTML**

## 🛠️ Technical Details

- **No build process** - Just open HTML files in a browser
- **No dependencies** - Except Google Fonts (loaded from CDN)
- **Vanilla JavaScript** - Minimal, progressive enhancement
- **CSS Variables** - Easy theming
- **Modern CSS** - Grid, Flexbox, custom properties

## 💡 Tips

- **Image optimization:** Compress your images before uploading (use [TinyPNG](https://tinypng.com/))
- **Test forms:** Submit test responses to make sure everything works
- **Backup:** Keep a copy of your original files before making changes
- **Browser testing:** Test in Chrome, Safari, Firefox, and mobile browsers

## 📝 Content Checklist

Before going live, make sure you've updated:
- [ ] Names on homepage
- [ ] All four dream descriptions
- [ ] Google Forms embedded on all dream pages
- [ ] Payment link on payment page
- [ ] QR code (if using)
- [ ] Bank details for manual transfer
- [ ] All photos replaced
- [ ] Thank you message personalized
- [ ] Wedding date added (if desired)

## ❤️ Support

This is a static website that requires no backend or database. All form submissions go to Google Forms, and payments are handled through your bank's payment links.

If you need to make changes after publishing:
1. Edit the HTML/CSS files locally
2. Re-upload to your hosting/GitHub

## 🎉 Enjoy!

Wishing you a beautiful wedding and wonderful memories with your guests!

---

*Made with love for Cisca & Magdalena* 💝