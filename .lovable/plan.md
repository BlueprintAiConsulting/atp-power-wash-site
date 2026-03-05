

## Plan: Restore OG Image to ATP Logo on Gray Background

The uploaded screenshot shows the previous iMessage preview: the ATP logo centered on a clean gray/silver background. We need to restore that exact look.

### Steps

1. **Copy the uploaded image** (`user-uploads://IMG_2401.jpeg`) to `public/og-image.png`, replacing the current one. This image already shows the ATP logo centered on the gray background — exactly what the client wants.

2. **No changes to `index.html`** — the meta tags already point to `/og-image.png` with correct 1200×630 dimensions.

### Files Changed
- **`public/og-image.png`** — replaced with the uploaded ATP logo image

