# Design System - Atomic Design

**Portfolio:** Nick Cusano Graphic Design Portfolio  
**Theme:** Dark Tech, Bold Red Accents, Glass-morphism  
**Responsive:** Mobile | Tablet | Desktop

---

## 🎨 Color Palette

### Primary Colors
- **Background**: `#000000` - Pure black (main background)
- **Primary Red**: `#BD0000` - Bright red (brand, accents, CTAs)
- **White**: `#FFFFFF` - High contrast text & elements

### Secondary Colors
- **Neutral Dark**: `#1A1A1A` - Slightly lighter black (cards, containers)
- **Neutral Gray**: `#808080` - Mid-tone gray (secondary text)
- **Neutral Light**: `#CCCCCC` - Light gray (borders, dividers)

### Glass-morphism Colors
- **Glass Dark**: `rgba(26, 26, 26, 0.375)` - Frosted glass overlay
- **Glass Red**: `rgba(189, 0, 0, 0.1)` - Subtle red glass effect

### Glow Effects
- **Red Glow (Subtle)**: `0 0 20px rgba(189, 0, 0, 0.5)` - Soft red glow on text/accents
- **Red Glow (Bright)**: `0 0 30px rgba(189, 0, 0, 0.8)` - Stronger glow on CTAs/hovering elements

---

## 📝 Typography

### Font Stack (Web-Safe)
```css
/* Headings */
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700 | 600;

/* Body */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-weight: 400 | 500;

/* Accents */
font-family: 'Avenir', 'Trebuchet MS', sans-serif;
font-weight: 600;
```

### Type Scale

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| H1 | 48px / 3rem | 700 | Page titles, hero |
| H2 | 36px / 2.25rem | 700 | Section titles |
| H3 | 28px / 1.75rem | 600 | Subsections |
| H4 | 24px / 1.5rem | 600 | Card titles |
| Body | 16px / 1rem | 400 | Main text |
| Small | 14px / 0.875rem | 400 | Captions, metadata |
| Tiny | 12px / 0.75rem | 500 | Labels, badges |

### Line Height
- Headings: 1.2
- Body: 1.6
- Compact: 1.4

---

## 📏 Spacing System

**Base Unit: 4px**

| Scale | Pixels | Tailwind Class |
|-------|--------|----------------|
| xs | 4px | gap-1 |
| sm | 8px | gap-2 |
| md | 16px | gap-4 |
| lg | 24px | gap-6 |
| xl | 32px | gap-8 |
| 2xl | 48px | gap-12 |
| 3xl | 64px | gap-16 |

**Usage:**
- Padding/Margin within components: `md` (16px)
- Component spacing: `lg` (24px)
- Section spacing: `xl` (32px) or `2xl` (48px)
- Gutter (responsive): mobile 16px, tablet 24px, desktop 32px

---

## 🔘 Border Radius

| Style | Value | Use Case |
|-------|-------|----------|
| Sharp | 0px | Minimal, geometric |
| Subtle | 4px | Buttons, badges |
| Normal | 8px | Cards, containers |
| Soft | 12px | Large containers |
| Rounded | 24px | Featured cards |
| Full | 9999px | Circles, pills |

---

## ✨ Shadows & Glow

### Box Shadows
```css
/* Subtle Glow (inactive) */
box-shadow: 0 0 20px rgba(189, 0, 0, 0.3);

/* Bright Glow (hover/active) */
box-shadow: 0 0 30px rgba(189, 0, 0, 0.6);

/* Glass Depth */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

/* Neon Edge (accent) */
box-shadow: 0 0 15px rgba(189, 0, 0, 0.5), 
            inset 0 0 10px rgba(255, 255, 255, 0.1);
```

### Text Shadows
```css
/* Subtle glow on text */
text-shadow: 0 0 20px rgba(189, 0, 0, 0.5);

/* Bright red accent text */
text-shadow: 0 0 30px rgba(189, 0, 0, 0.7);
```

---

## 🎯 Component Patterns (Atomic)

### Buttons

**Primary (CTA)**
```
Background: #BD0000
Text: #FFFFFF
Padding: 16px 32px (md lg)
Border Radius: 8px
Shadow: Red glow bright
Hover: Glow intensifies, slight scale
Transition: 200ms ease
```

**Secondary (Links)**
```
Background: transparent
Text: #FFFFFF
Border: 2px solid #BD0000
Padding: 12px 24px
Hover: Background glass-morphism overlay
```

**Tertiary (Ghost)**
```
Background: rgba(255, 255, 255, 0.05)
Text: #FFFFFF
Padding: 12px 24px
Hover: Red glow subtle
```

### Cards
```
Background: #1A1A1A
Border: 1px solid rgba(189, 0, 0, 0.2)
Padding: 24px
Border Radius: 8px
Shadow: Glass depth
Backdrop Filter: blur(10px), opacity(0.375)
Hover: Border red brightens, glow activates
```

### Glass-morphism Container
```
Background: rgba(26, 26, 26, 0.375)
Backdrop Filter: blur(10px)
Border: 1px solid rgba(255, 255, 255, 0.1)
Border Radius: 12px
Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
```

### Input Fields
```
Background: rgba(26, 26, 26, 0.5)
Border: 1px solid rgba(189, 0, 0, 0.3)
Text Color: #FFFFFF
Padding: 12px 16px
Border Radius: 4px
Focus: Border #BD0000, glow subtle
Placeholder: rgba(255, 255, 255, 0.5)
```

### Project Card (Featured)
```
Background: Glass container
Border Radius: 12px
Overflow: hidden
Image overlay: Gradient black to transparent
Content: Padding lg
Hover: Scale 1.02, glow brightens, border red
```

---

## 📱 Responsive Breakpoints

| Device | Width | Padding/Gutter | Font Scale |
|--------|-------|-----------------|-----------|
| Mobile | 320px - 640px | 16px | 1x |
| Tablet | 641px - 1024px | 24px | 1.1x |
| Desktop | 1025px + | 32px | 1.2x |

**Tailwind Breakpoints:**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

---

## 🎭 Interaction & Motion

### Transitions
- Standard: `200ms ease`
- Slow: `300ms ease-out`
- Fast: `150ms ease-in`

### Hover States
- Scale: `1.02` (subtle)
- Glow: Intensify `box-shadow`
- Border: Brighten color
- Cursor: `pointer`

### Focus States
- Outline: `2px solid #BD0000`
- Glow: Activate red subtle glow
- Visible on keyboard navigation

---

## ♿ Accessibility

- **Contrast**: WCAG AA minimum 4.5:1 (red on black: 5.5:1 ✅)
- **Font sizes**: Minimum 16px for body text (mobile friendly)
- **Touch targets**: Minimum 44px for buttons
- **Focus indicators**: Visible red outline on all interactive elements
- **Glow as decoration**: Not the only indicator (also use color, text)

---

## 📐 Grid System

**12-column grid, flexible**

| Screen | Columns | Gap |
|--------|---------|-----|
| Mobile | 1-2 | 16px |
| Tablet | 2-3 | 24px |
| Desktop | 3-4+ | 32px |

---

## 🎨 Design Tokens (CSS Variables)

See `globals.css` for implementation of:
- `--color-primary`, `--color-primary-glow`
- `--color-bg`, `--color-card`
- `--spacing-*` (xs, sm, md, lg, xl, 2xl, 3xl)
- `--radius-*` (subtle, normal, soft, rounded)
- `--font-heading`, `--font-body`
- `--shadow-glow-subtle`, `--shadow-glow-bright`
