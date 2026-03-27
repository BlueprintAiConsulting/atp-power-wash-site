

## Plan: Add Before/After Video Inside the Services Section

**Goal:** Add a before/after house wash video as a featured element within the Services section.

### Design

Add a full-width "Before & After" video showcase below the service cards grid, still inside the Services section. It will feature:
- A heading like "See the Difference" or "Before & After"
- The video in a rounded card with autoplay/muted/loop (matching the ProofStrip video style)
- A CTA button beside or below it

### Steps

1. **Upload the video** — You'll provide the before/after video file, and I'll add it to `src/assets/`

2. **Update `src/components/Services.tsx`** — Add a new subsection after the services grid (line 92) with:
   - A two-column layout (video left, text + CTA right) on desktop; stacked on mobile
   - The video using the same seamless loop hook (`useSeamlessVideoLoop`) as ProofStrip
   - Heading, short description, and a "Get Free Quote" button

### Layout (desktop)
```text
┌─────────────────────────────────────────┐
│           Services Grid (existing)       │
├────────────────────┬────────────────────┤
│                    │  "See the          │
│   [Before/After    │   Difference"      │
│    Video]          │   Description...   │
│                    │   [Get Free Quote] │
└────────────────────┴────────────────────┘
```

### What I need from you
Upload the before/after video file so I can add it to the project.

