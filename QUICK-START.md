# Quick Setup Guide - Wedding Gift Website

## ⚡ Getting Started in 5 Minutes

### Step 1: Open the website
Open `index.html` in your browser to see your website!

### Step 2: Add your photos
1. Add photos to the `assets/` folder
2. Update image paths in HTML files where you see comments like:
   - `<!-- REPLACE WITH YOUR HOUSE PHOTO -->`
   - `<!-- REPLACE WITH YOUR WEDDING PHOTO -->`
   - etc.
3. Remember: pages in language folders (nl/, en/, pl/) use `../assets/` to reference images

### Step 3: Create Google Forms
1. Go to https://forms.google.com/
2. Create a form for each dream (or one form for all)
3. Add fields: Name, Email, Message
4. Get the embed code (Send → `<>` icon)
5. Paste it in each language's dream pages:
   - Dutch: `nl/dreams/*.html`
   - English: `en/dreams/*.html`
   - Polish: `pl/dreams/*.html`

### Step 4: Add payment link
1. Create a Tikkie/ING payment request
2. Open payment pages in all languages:
   - `nl/payment.html`
   - `en/payment.html`
   - `pl/payment.html`
3. Find: `<!-- PASTE YOUR ING/TIKKIE PAYMENT LINK HERE -->`
4. Replace the `#` with your payment URL in all three files

### Step 5: Customize text
- Replace "Cisca & Magdalena" (or "Francisca & Magdalena") with your names
- Update dream descriptions in all language folders
- Add your bank details in all payment pages
- Add wedding date in footer (optional)

### Step 6: Test everything
- ✅ Click through all pages in all languages (nl/, en/, pl/)
- ✅ Test Google Forms in each language
- ✅ Test payment links
- ✅ Check language switcher works
- ✅ Check on mobile

### Step 7: Publish
**Option A - GitHub Pages (Recommended):**
1. Create GitHub account
2. Create new repository
3. Upload all files
4. Enable GitHub Pages in Settings

**Option B - Netlify:**
1. Go to netlify.com
2. Drag & drop your wedding-gifts folder
3. Get instant URL

## 📋 Quick Checklist

Before publishing:
- [ ] All photos added to assets/
- [ ] All image placeholders replaced in all languages
- [ ] Google Forms embedded in all dream pages (12 total: 4 per language)
- [ ] Payment link updated in all 3 payment pages
- [ ] Bank details updated (optional) in all languages
- [ ] Names customized throughout
- [ ] All links tested in all languages
- [ ] Language switcher tested
- [ ] Mobile view tested

## 🆘 Need Help?

**Google Forms not redirecting?**
- Add a link in the confirmation message
- Or use "Go to another page" add-on

**Payment link not working?**
- Make sure you copied the full URL
- Test the link in a private browser window

**Images not showing?**
- Check file paths are correct
- Make sure images are in assets/ folder
- Check file names match (case-sensitive)

## 🎨 Want to customize colors?
css/
Open `styles.css` and change these at the top:
```css
:root {
  --color-ivory: #FAF7F2;    /* Background */
  --color-gold: #D4AF37;     /* Accent color */
  --color-brown: #8B7355;    /* Text */
}
```

---

That's it! You're ready to share your beautiful wedding gift website! 💝
