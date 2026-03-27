

## Plan: Improve Hero Image Visibility

**Change:** In `src/index.css`, reduce the hero overlay gradient opacity from `0.95` to `0.70` on both color stops. This lets 30% of the background image show through instead of the current 5%, a roughly 25% improvement in visibility.

### File: `src/index.css` (line 51)

**Before:**
```css
--gradient-hero: linear-gradient(135deg, hsl(210 100% 45% / 0.95) 0%, hsl(215 50% 20% / 0.95) 100%);
```

**After:**
```css
--gradient-hero: linear-gradient(135deg, hsl(210 100% 45% / 0.70) 0%, hsl(215 50% 20% / 0.70) 100%);
```

Single line change. Text remains legible with this opacity level.

