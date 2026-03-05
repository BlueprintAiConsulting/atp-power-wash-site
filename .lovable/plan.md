

## Plan: Create OG Image from Uploaded Photo + ATP Logo

**Goal:** Replace the current generated OG image with a composite using the uploaded house photo and the existing ATP logo, sized at 1200×630px for proper iMessage previews.

### Steps

1. **Copy the uploaded house photo** into the project as a source asset.

2. **Use AI image generation** to composite the image at 1200×630px — the uploaded house photo as the background with the ATP logo (from `src/assets/atp-logo.png` or `src/assets/atp-logo-circle.jpeg`) overlaid, likely in a corner or center-top position with brand text.

3. **Save as `public/og-image.png`** — replacing the current placeholder OG image. No changes to `index.html` needed since the meta tags already point to this file.

### Files Changed
- **`public/og-image.png`** — replaced with new composite image

