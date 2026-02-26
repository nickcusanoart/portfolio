# Project Folder Structure

```
portfolio-site/
├── docs/                          # Documentation (planning files)
│   ├── PROJECT_PLAN.md
│   ├── TECH_STACK.md
│   ├── FOLDER_STRUCTURE.md
│   └── DEPLOYMENT_VERCEL.md
│
├── app/                           # Next.js app directory
│   ├── page.js                    # Homepage (/)
│   ├── layout.js                  # Root layout
│   ├── globals.css                # Global styles
│   │
│   ├── projects/                  # Projects section
│   │   ├── page.js                # Projects gallery (/projects)
│   │   └── [id]/
│   │       └── page.js            # Individual project (/projects/[id])
│   │
│   ├── about/                     # About/Resume section
│   │   └── page.js                # About page (/about)
│   │
│   ├── contact/                   # Contact section
│   │   └── page.js                # Contact form (/contact)
│   │
│   └── api/                       # Backend routes
│       └── contact/
│           └── route.js           # Contact form submission
│
├── public/                        # Static files (images, fonts, etc)
│   ├── images/
│   │   ├── projects/              # Project showcase images
│   │   ├── hero/                  # Hero section images
│   │   └── icons/                 # Icons
│   └── fonts/                     # Custom fonts
│
├── components/                    # Reusable React components
│   ├── Navigation.js
│   ├── Footer.js
│   ├── ProjectCard.js
│   ├── ContactForm.js
│   └── Hero.js
│
├── .gitignore                     # Git ignore rules
├── .env.local                     # Local environment variables (NOT committed)
├── .env.example                   # Example environment variables (template)
├── package.json                   # Dependencies
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind CSS config
├── tailwind.css                  # Tailwind directives
├── README.md                      # Main README
└── vercel.json                   # Vercel deployment config (optional)
```

## Key Directories Explained

- **`app/`** - All pages and routing live here (Next.js 14 App Router)
- **`public/`** - Images, fonts, and static files (served at root URL)
- **`components/`** - Reusable React components used across pages
- **`docs/`** - Project documentation and planning
- **`api/`** - Backend endpoints (contact form, etc)

## File Types

- `.js` - JavaScript files (can use `.jsx`)
- `.css` - Styling
- `.json` - Configuration files
