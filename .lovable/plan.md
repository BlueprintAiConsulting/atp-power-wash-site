

## Plan: Add Manual Google Review Card

Replace the Elfsight placeholder in `src/components/Reviews.tsx` with a styled testimonial card showing this review:

- **Reviewer:** Unique C
- **Rating:** 5 stars
- **Date:** 2 weeks ago
- **Text:** "Absolutely amazing job! Our house looks brand new after the power washing. ATP was very professional, on time, and paid attention to every detail from the siding to the porch. I didn't realize how much of a difference it would make…"

### Changes

**`src/components/Reviews.tsx`**
- Remove the Elfsight script loading `useEffect`
- Replace the `elfsight-app-lazy` div with a review card containing:
  - Reviewer avatar initial ("U"), name, "5 reviews" subtitle
  - 5 filled gold stars
  - "2 weeks ago" timestamp
  - Review text
  - Keep the existing "See all reviews on Google →" link
- Keep the Facebook embed column as-is

### Files Changed
- **`src/components/Reviews.tsx`** — replace Elfsight with static review card

