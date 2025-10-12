# Deployment Guide

This guide covers deployment to both **Netlify** and **Vercel** platforms.

---

## 🚀 Netlify Deployment (Recommended)

### Prerequisites

- A [Netlify account](https://app.netlify.com/signup) (free)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 20 or higher installed locally

### Quick Deploy

#### Option 1: Deploy via Netlify Dashboard

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories

3. **Configure build settings**
   - Select your repository
   - Netlify will auto-detect Next.js and configure settings from `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Wait for deployment**
   - Netlify will install dependencies and build your site
   - First deployment takes 2-5 minutes
   - You'll get a random URL like `https://random-name-12345.netlify.app`

5. **Configure custom domain (optional)**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow instructions to update DNS settings

#### Option 2: Deploy with Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

### Netlify Configuration Files

The following files are configured for Netlify:

- **`netlify.toml`**: Build settings, redirects, headers, caching
- **`next.config.ts`**: Image optimization, security, compression
- **`.npmrc`**: Dependency handling for smooth builds

### Environment Variables (Netlify)

1. Go to Site settings → Environment variables
2. Add required variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   CONTACT_EMAIL=your@email.com
   CONTACT_PHONE=+1234567890
   ```
3. Redeploy for changes to take effect

---

## ⚡ Vercel Deployment (Alternative)

### Setup
1. Push code to GitHub repository
2. Sign in to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

### Environment Variables (Vercel)
Add these in Vercel dashboard under Settings > Environment Variables:
- `NEXT_PUBLIC_SITE_URL` = your production URL
- `CONTACT_EMAIL` = your email
- `CONTACT_PHONE` = your phone number
- Any email service credentials needed

### Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Visit your deployed site

---

## 📋 Pre-Deployment Checklist

### Content Updates
- [ ] Update personal information in `src/lib/structured-data.tsx`
- [ ] Update contact details in `src/app/contact/page.tsx`
- [ ] Update social media links in `src/components/layout/footer.tsx`
- [ ] Update social media links in `src/components/layout/header.tsx`
- [ ] Add your projects to `src/data/content.ts`
- [ ] Add your services to `src/data/content.ts`
- [ ] Add client testimonials to `src/data/content.ts`
- [ ] Update About page content in `src/app/about/page.tsx`
- [ ] Update hero section in `src/components/ui/hero-section.tsx`
- [ ] Replace placeholder images in `public/` folder

### Configuration
- [ ] Create `.env.local` from `.env.example`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production URL
- [ ] Set `CONTACT_EMAIL` and `CONTACT_PHONE`
- [ ] Configure email service (Resend/SendGrid/SMTP)
- [ ] Update Google verification code in `src/app/layout.tsx`
- [ ] Update Twitter handle in `src/app/layout.tsx`

### SEO & Metadata
- [ ] Update site title in `src/app/layout.tsx`
- [ ] Update site description in `src/app/layout.tsx`
- [ ] Add Open Graph image (`public/og-image.jpg`, 1200x630px)
- [ ] Verify all page metadata is accurate
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Testing
- [ ] Test all pages in development mode
- [ ] Test contact form submission
- [ ] Test theme toggle (light/dark mode)
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Test all animations and scroll effects
- [ ] Test all navigation links
- [ ] Test project detail pages
- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` with no errors
- [ ] Test production build locally: `npm run build && npm start`

---

## 📊 Post-Deployment Checklist

### Verification
- [ ] Visit live site and test all functionality
- [ ] Test contact form submission
- [ ] Verify theme toggle works
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test 404 page (visit non-existent URL)

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership with Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test site with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test structured data with [Rich Results Test](https://search.google.com/test/rich-results)

### Domain Setup (Custom Domain)
- [ ] Add custom domain in platform dashboard
- [ ] Update DNS records at domain registrar
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify SSL certificate is active
- [ ] Update `NEXT_PUBLIC_SITE_URL` in environment variables
- [ ] Force HTTPS redirect

---

## 🔧 Troubleshooting

### Netlify-Specific Issues

**Build fails with "Cannot find module"**
```bash
# Clear node_modules and reinstall locally
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Update dependencies"
git push
```

**Images not loading**
- Ensure images are in the `public` folder
- Use Next.js `<Image>` component (already configured)
- Check image paths start with `/`

**404 on page refresh**
- Already configured in `netlify.toml` with redirects
- Custom 404 page is in `src/app/not-found.tsx`

**Build takes too long**
- Normal build time: 2-5 minutes
- Netlify free plan: 300 build minutes/month
- Consider upgrading if you deploy frequently

### General Issues

**Contact Form Not Working**
- Verify email service credentials in environment variables
- Check API route is accessible: `/api/contact`
- Review server logs for errors

**Styles Not Loading**
- Clear browser cache
- Verify Tailwind CSS is configured correctly
- Check `globals.css` imports
- Rebuild: `npm run build`

**Dark Mode Issues**
- Verify ThemeProvider is in root layout
- Check theme toggle component
- Test localStorage is working
- Clear browser data and test again

---

## 🚀 Performance Optimizations

Your site includes:
- ✅ Next.js Image Optimization
- ✅ Automatic compression
- ✅ CDN distribution worldwide
- ✅ Cache headers for static assets
- ✅ Security headers enabled
- ✅ Responsive images
- ✅ Code splitting
- ✅ Lazy loading

---

## 💰 Platform Comparison

### Netlify (Recommended)
- **Pros**: Easy setup, generous free tier, great DX
- **Free Tier**: 100GB bandwidth, 300 build minutes
- **Best For**: Most projects, forms, serverless functions

### Vercel (Alternative)
- **Pros**: Built by Next.js team, excellent performance
- **Free Tier**: 100GB bandwidth, unlimited builds
- **Best For**: Next.js apps, serverless functions, edge computing

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Next.js Plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**🎉 Congratulations!** Your portfolio is ready to deploy to Netlify or Vercel!
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Google Search Console](https://search.google.com/search-console)
