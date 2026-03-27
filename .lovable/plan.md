

## Plan: Add Google & Facebook Review Widgets

**Goal:** Add a "Reviews" section with embedded live Google and Facebook review widgets for social proof/credibility.

### Placement

New `Reviews` component inserted between `Services` and `ServiceAreas` in the page layout — right after the work showcase, before the coverage map.

### Design

- Section heading: "What Our Customers Say" with a subheading
- Two-column layout (stacked on mobile):
  - **Google Reviews** — embedded via [Elfsight](https://elfsight.com) or Google's Place Reviews widget
  - **Facebook Reviews** — embedded via Facebook Page Plugin (reviews tab)
- Each column gets a card with the platform logo/label and the embed below

### Technical Details

**Problem:** Google and Facebook don't offer simple free embed widgets natively. The standard approaches are:

1. **Google Reviews** — Use an `<iframe>` or `<script>` embed from a widget service (Elfsight, Trustmary, etc.), OR manually curate reviews as cards with a "See all on Google" link
2. **Facebook Reviews** — Use the Facebook Page Plugin with the `reviews` tab: `https://www.facebook.com/plugins/page.php?href=...&tabs=reviews`

### What I need from you

1. **Google Business Profile name or Place ID** — so I can set up the Google reviews embed. You can find this by searching your business on Google Maps.
2. **Facebook Page URL** — I see `https://www.facebook.com/share/17n95D4n9h/` in the footer. Is this the correct Facebook page to pull reviews from?
3. **Embed preference** — For Google reviews, would you prefer:
   - A free Facebook-style iframe embed (limited styling)
   - Manually curated review cards (you provide the review text/names, with a link to Google)

### Files to Create/Modify

- **`src/components/Reviews.tsx`** — new component with review embeds
- **`src/pages/Index.tsx`** — add `<Reviews />` between Services and ServiceAreas

