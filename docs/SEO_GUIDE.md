# SEO Guide - Portfolio Optimization

**Portfolio:** Nick Cusano Graphic Design Portfolio  
**Goal:** Rank well for graphic design, portfolio, and branding searches  
**Phase:** Apply during development & before launch

---

## 🎯 SEO Strategy

### Target Keywords
- "Graphic design portfolio"
- "Nick Cusano graphic design"
- "Freelance graphic designer"
- "Brand design portfolio"
- "Logo design portfolio"
- "Design case studies"

### Search Intent
- People looking for designers to hire
- Students/recruiters reviewing portfolios
- Inspiration seekers

---

## 📋 Pre-Launch Checklist

### 1. Technical SEO

#### Meta Tags (Every Page)
- [ ] `<title>` (50-60 chars, keyword-rich)
  - Example: "Graphic Design Portfolio | Nick Cusano"
  - Example: "Logo & Branding Design | Nick Cusano"

- [ ] `<meta name="description">` (150-160 chars)
  - Example: "Explore Nick Cusano's graphic design portfolio featuring branding, logo design, and creative projects for colleges and startups."

- [ ] `<meta name="viewport">` for mobile
  - Already set in Next.js layout

- [ ] `<meta charset="UTF-8">` for encoding
  - Already set in Next.js

- [ ] `<meta name="robots">` content="index, follow"
  - Add to `layout.tsx`

#### Open Graph Tags (Social Sharing)
- [ ] `og:title` - Page title for social shares
- [ ] `og:description` - Brief page description
- [ ] `og:image` - Thumbnail for sharing (1200x630px)
- [ ] `og:url` - Canonical URL
- [ ] `og:type` - "website" or "article"
- [ ] `twitter:card` - "summary_large_image"

**Example:**
```html
<meta property="og:title" content="Graphic Design Portfolio | Nick Cusano" />
<meta property="og:description" content="Branding, logo design, and creative work." />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
<meta property="og:url" content="https://yoursite.com" />
<meta name="twitter:card" content="summary_large_image" />
```

#### Canonical URLs
- [ ] Add `<link rel="canonical">` to prevent duplicate content
- [ ] Point to primary URL (www or non-www, consistent)

#### Sitemap
- [ ] Generate `sitemap.xml` with all pages
- [ ] Include in `robots.txt`

**Next.js Sitemap Example** (`app/sitemap.ts`):
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yoursite.com', lastModified: new Date() },
    { url: 'https://yoursite.com/projects', lastModified: new Date() },
    { url: 'https://yoursite.com/about', lastModified: new Date() },
    { url: 'https://yoursite.com/contact', lastModified: new Date() },
  ]
}
```

#### Robots.txt
- [ ] Create `public/robots.txt`
- [ ] Allow all pages, disallow admin paths

**Example:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /.next/

Sitemap: https://yoursite.com/sitemap.xml
```

#### Structured Data (JSON-LD)
- [ ] Add `Person` schema for homepage
- [ ] Add `CreativeWork` schema for projects
- [ ] Add `ContactPoint` schema for contact info

**Person Schema Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nick Cusano",
  "url": "https://yoursite.com",
  "sameAs": ["https://linkedin.com/in/nick", "https://instagram.com/nick"],
  "jobTitle": "Graphic Designer",
  "image": "https://yoursite.com/profile.jpg"
}
```

#### Page Speed
- [ ] Optimize images (Next.js Image component - use `next/image`)
- [ ] Lazy load images
- [ ] Minify CSS/JS (automatic with Next.js build)
- [ ] Enable gzip compression (automatic with Vercel)
- [ ] Test with Google PageSpeed Insights

#### Mobile Responsiveness
- [ ] Test on mobile devices (375px, 768px, 1024px+)
- [ ] Ensure touch-friendly buttons (44px minimum)
- [ ] No horizontal scrolling
- [ ] Fast load times on slow networks

---

### 2. On-Page SEO

#### Homepage (`/`)
- [ ] Title: "Graphic Design Portfolio | Nick Cusano"
- [ ] H1: One unique heading per page
- [ ] Keywords in first 100 words
- [ ] Internal links to projects, about
- [ ] Strong call-to-action

#### Projects Page (`/projects`)
- [ ] Title: "Design Projects & Case Studies | Nick Cusano"
- [ ] Meta: "Explore my graphic design projects including branding, logos, and digital design work."
- [ ] H1 on page
- [ ] Each project has title, description, category
- [ ] Link to project detail pages

#### Project Detail Pages (`/projects/[id]`)
- [ ] Dynamic title: "{Project Name} - Graphic Design | Nick Cusano"
- [ ] Dynamic meta description: Project summary
- [ ] H1: Project title
- [ ] H2: Project sections (Challenge, Solution, Results)
- [ ] Internal links to other projects
- [ ] Strong image alt text (describe design elements)

#### About Page (`/about`)
- [ ] Title: "About | Nick Cusano - Graphic Designer"
- [ ] Meta: "Learn about Nick Cusano's design philosophy, experience, and expertise."
- [ ] H1: "About Me" or "Who I Am"
- [ ] Natural keyword usage: "graphic design," "brand design," etc.
- [ ] Link to projects and contact

#### Contact Page (`/contact`)
- [ ] Title: "Get in Touch | Nick Cusano Design"
- [ ] Meta: "Let's work together. Contact Nick Cusano for your graphic design needs."
- [ ] H1: "Contact" or "Let's Work Together"
- [ ] Structured contact data (phone, email, location if desired)

---

### 3. Content SEO

#### Writing Best Practices
- [ ] Write for humans first, SEO second
- [ ] Use short paragraphs (2-3 sentences)
- [ ] Vary sentence length
- [ ] Use bullet points for lists
- [ ] Natural keyword placement (not forced)

#### Keyword Density
- Target keyword: 1-2% on main pages
- Don't overstuff keywords
- Use synonyms & variations

#### Headings Structure
```
H1: One per page (main title)
  ├─ H2: Section title
  │  ├─ H3: Subsection
  │  └─ Paragraph content
  └─ H2: Another section
```

#### Image SEO
- [ ] Use descriptive alt text
  - ✅ "Red and white logo design for tech startup"
  - ❌ "Logo"
  
- [ ] Use descriptive filenames
  - ✅ `red-tech-logo-design.jpg`
  - ❌ `image1.jpg`

- [ ] Use Next.js Image component for optimization
  - Automatic lazy loading
  - Automatic format conversion (WebP)
  - Responsive images

#### Internal Linking
- [ ] Link related projects together
- [ ] Use descriptive anchor text
  - ✅ "View more branding projects"
  - ❌ "Click here"

- [ ] Create a content network
  - Home → Projects → Project Detail → Related Projects → Home

---

### 4. Off-Page SEO

#### Backlinks & Authority
- [ ] Submit to design directories
  - Dribbble, Behance, AwardMob, Graphis, etc.
  - Include portfolio link in profiles

- [ ] Guest contributions
  - Write articles for design blogs
  - Include portfolio link in author bio

- [ ] Social media
  - Share projects across platforms
  - Link back to portfolio site

#### Social Signals
- [ ] Add social sharing buttons to projects
- [ ] Create compelling social preview (og:image)
- [ ] Share projects on Instagram, LinkedIn, Twitter

---

### 5. Local SEO (if applicable)

#### Local Business Schema
- [ ] Add location schema if you're location-based
- [ ] Add service area in metadata

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nick Cusano Design",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "CA"
  }
}
```

---

## 🔧 Implementation Checklist

### In Code

#### Root Layout (`app/layout.tsx`)
- [ ] Add metadata export
- [ ] Add json-ld schema
- [ ] Set viewport meta
- [ ] Set robots meta

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Graphic Design Portfolio | Nick Cusano',
  description: 'Explore Nick Cusano\'s graphic design portfolio featuring branding, logos, and creative projects.',
  keywords: 'graphic design, portfolio, branding, logo design, creative',
  robots: 'index, follow',
  openGraph: {
    title: 'Graphic Design Portfolio | Nick Cusano',
    description: 'Graphic designer creating bold, modern designs.',
    url: 'https://yoursite.com',
    siteName: 'Nick Cusano Design',
    images: [{ url: 'https://yoursite.com/og-image.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

#### Individual Pages
- [ ] Add page-specific metadata
- [ ] Add dynamic metadata for project pages

#### Images
- [ ] Use `next/image` for all images
- [ ] Add descriptive alt text
- [ ] Set proper dimensions

```typescript
<Image
  src="/projects/branding.jpg"
  alt="Red and white brand identity guideline document"
  width={800}
  height={600}
/>
```

#### URLs
- [ ] Use descriptive URLs
  - ✅ `/projects/tech-startup-branding`
  - ❌ `/project-1`

- [ ] Use hyphens, not underscores
- [ ] Keep URLs short but descriptive

#### Files to Create
- [ ] `app/sitemap.ts`
- [ ] `app/robots.ts`
- [ ] `app/layout.tsx` (metadata)
- [ ] `lib/schema.ts` (JSON-LD schemas)

---

## 📊 Monitoring & Analytics

### Google Tools
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor indexing status
- [ ] Check search performance (clicks, impressions, CTR)
- [ ] Fix any crawl errors

### Google Analytics
- [ ] Set up GA4
- [ ] Track page views
- [ ] Monitor bounce rate, session duration
- [ ] Track clicks to contact form

### Performance Monitoring
- [ ] Google PageSpeed Insights
- [ ] Lighthouse (in DevTools)
- [ ] Monitor Core Web Vitals
  - Largest Contentful Paint (LCP): < 2.5s
  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1

---

## 📈 Long-Term Strategy

### Continuous Optimization
- [ ] Monitor keyword rankings monthly
- [ ] Update project descriptions with keywords
- [ ] Add new projects/case studies regularly
- [ ] Fix low-performing pages
- [ ] Monitor competitor portfolios

### Content Calendar
- Add new projects every 2-3 months
- Share projects on social media
- Write case studies for complex projects

### Link Building
- Submit to design awards
- Build relationships with design blogs
- Guest post on relevant sites

---

## 🎯 Expected Results

**Timeline:**
- **Week 1-4:** Baseline (crawling, indexing)
- **Month 2-3:** Keyword rankings begin to climb
- **Month 3-6:** First page rankings for branded terms
- **Month 6+:** Rankings for broader design keywords

**Success Metrics:**
- Organic traffic from search
- Click-through rate from search results
- Cost per lead (in your case, inquiries)
- Keyword rankings (track top 20)

---

## 🚀 Pre-Launch Checklist

- [ ] All meta tags added to pages
- [ ] sitemap.xml created and submitted
- [ ] robots.txt created
- [ ] JSON-LD schemas added
- [ ] Open Graph images created (1200x630px)
- [ ] Alt text on all images
- [ ] Internal links reviewed
- [ ] Page speed tested (90+ on Lighthouse)
- [ ] Mobile responsiveness tested
- [ ] Google Search Console connected
- [ ] Analytics tracking added
- [ ] Structured data tested (schema.org validator)

---

## 📚 Resources

- [Google Search Central](https://search.google.com/search-console)
- [Schema.org Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Screaming Frog (crawl audit)](https://www.screamingfrog.co.uk/seo-spider-free/)
