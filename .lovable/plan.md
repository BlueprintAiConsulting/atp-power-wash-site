

## Fix: Open Graph / iMessage Link Preview Image

**Problem:** The `og:image` currently points to `https://lovable.dev/opengraph-image-p98pqg.png` — a Lovable placeholder that is likely not the standard 1200×630px aspect ratio, causing an elongated preview in iMessage.

**Solution:** Create a proper Open Graph image at the standard **1200×630px** dimensions and update the meta tags.

### Approach

1. **Generate an OG image** (`public/og-image.png`) at 1200×630px using the existing hero background (`hero-bg.jpg`) with the ATP logo overlaid and brand text. This will be done as a static asset.

2. **Update `index.html`** meta tags:
   - Change `og:image` to point to the absolute published URL: `https://atp-shine-layout.lovable.app/og-image.png`
   - Add `og:image:width` (1200) and `og:image:height` (630) meta tags so platforms know the dimensions upfront
   - Update `twitter:image` to match

**Alternative:** If you have a specific marketing image you'd like used for link previews, you can upload it (1200×630px recommended) and I'll use that instead. Otherwise I'll compose one from your existing hero background and logo.

### Changes

- **`public/og-image.png`** — new 1200×630 composite image
- **`index.html`** — update `og:image`, `twitter:image` URLs and add dimension hints

