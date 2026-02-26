# Deployment Guide - Vercel

## Why Vercel?

- Created by the makers of Next.js
- Free tier perfect for portfolios
- Automatic GitHub integration
- Zero-config deployment
- Fast CDN worldwide
- Custom domains supported
- Built-in environment variables

---

## Deployment Steps

### Step 1: Push to GitHub

Make sure your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Ready for production"
git push origin main
```

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Connect with your GitHub account
4. Authorize Vercel

### Step 3: Import Project

1. Click "New Project" on Vercel dashboard
2. Select your GitHub repository
3. Click "Import"
4. Vercel auto-detects Next.js ✅

### Step 4: Environment Variables (if needed)

If you're using email service (SendGrid, Nodemailer, etc):

1. In Vercel dashboard → Project settings → Environment Variables
2. Add your API keys:
   - `NEXT_PUBLIC_*` = Public (visible in browser)
   - `NEXT_PRIVATE_*` = Secret (server-side only)

Example for contact form:
```
SENDGRID_API_KEY = your_api_key_here
```

### Step 5: Deploy

Click "Deploy" button. Vercel will:
- Build your Next.js app
- Run tests
- Deploy to production
- Give you a live URL

---

## After Deployment

### Auto-Deployment from GitHub

Every time you push to GitHub, Vercel automatically deploys! No extra steps needed.

### Custom Domain (Optional)

1. Buy a domain (Namecheap, GoDaddy, etc)
2. In Vercel → Project settings → Domains
3. Add your domain
4. Update nameservers (Vercel provides instructions)

### Preview Deployments

Every pull request automatically gets a preview URL before merging to `main`.

---

## Production Checklist

- [ ] code pushed to GitHub
- [ ] Environment variables set in Vercel
- [ ] Contact form tested
- [ ] Images loading properly
- [ ] Mobile responsive
- [ ] Links work correctly
- [ ] Contact form submission works

---

## Troubleshooting

**Build fails?**
- Check `next build` locally first
- Review build logs on Vercel dashboard

**Images not loading?**
- Make sure images are in `/public` folder
- Use Next.js `<Image>` component

**Form not sending emails?**
- Check API keys are set in Vercel environment variables
- Test form locally first
