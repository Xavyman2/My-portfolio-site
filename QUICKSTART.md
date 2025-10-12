# Quick Start Guide

## 🚀 Get Your Portfolio Live in 15 Minutes

### Step 1: Customize Content (5 minutes)

#### Update Contact Information
Open `src/app/contact/page.tsx` and update lines 12-35:
```typescript
const contactMethods = [
  {
    label: 'Email',
    value: 'YOUR_EMAIL@example.com',  // <-- Change this
    href: 'mailto:YOUR_EMAIL@example.com',  // <-- Change this
  },
  {
    label: 'Phone',
    value: '+1 (555) 123-4567',  // <-- Change this
    href: 'tel:+15551234567',  // <-- Change this
  },
  {
    label: 'WhatsApp',
    value: '+1 (555) 123-4567',  // <-- Change this
    href: 'https://wa.me/15551234567',  // <-- Change this
  },
]
```

#### Update Social Links
Open `src/components/layout/footer.tsx` and update around line 8-11:
```typescript
{ icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
{ icon: Linkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
{ icon: Mail, href: 'mailto:YOUR_EMAIL@example.com', label: 'Email' },
```

#### Update Your Name
Open `src/lib/structured-data.tsx` and update line 6:
```typescript
name: 'Your Full Name',  // <-- Change this
```

### Step 2: Add Your Projects (3 minutes)

Open `src/data/content.ts` and replace the sample projects (lines 3-86) with your own:

```typescript
export const projects: Project[] = [
  {
    id: 'my-project',
    slug: 'my-project',  // Used in URL: /projects/my-project
    title: 'My Awesome Project',
    description: 'A brief description of what you built',
    longDescription: 'A longer description with more details...',
    image: '/projects/my-project.jpg',  // Add image to public/projects/
    images: ['/projects/my-project.jpg'],
    technologies: ['Next.js', 'React', 'TypeScript'],
    tags: ['Web App', 'Next.js', 'TypeScript'],
    liveUrl: 'https://myproject.com',
    githubUrl: 'https://github.com/you/project',
    featured: true,
    category: 'fullstack',
    timeline: '2 months',
    role: 'Full-stack Developer',
    problem: 'What problem did this solve?',
    solution: 'How did you solve it?',
    outcome: 'What were the results?',
    metrics: [
      { label: 'Metric 1', value: '+50%' },
      { label: 'Metric 2', value: '95/100' },
    ],
  },
  // Add more projects...
]
```

### Step 3: Set Up Environment (2 minutes)

1. Create `.env.local` file in the project root:
```bash
cp .env.example .env.local
```

2. Open `.env.local` and update:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=your@email.com
CONTACT_PHONE=+15551234567
```

### Step 4: Test Locally (2 minutes)

```bash
npm install
npm run dev
```

Visit http://localhost:3000 and check:
- ✅ All pages load
- ✅ Theme toggle works
- ✅ Contact links work
- ✅ Navigation works

### Step 5: Deploy to Vercel (3 minutes)

1. Push to GitHub:
```bash
git add .
git commit -m "Customize portfolio"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` = https://your-domain.vercel.app
   - `CONTACT_EMAIL` = your@email.com
   - `CONTACT_PHONE` = +15551234567
6. Click "Deploy"

### ✅ Done!

Your portfolio is now live! 🎉

## 📝 Optional Enhancements

### Add Email Service (5 minutes)
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to Vercel environment variables: `RESEND_API_KEY=re_xxxx`
4. Uncomment Resend code in `src/app/api/contact/route.ts`

### Add Custom Domain (10 minutes)
1. In Vercel dashboard, go to Settings > Domains
2. Add your domain (e.g., johndoe.com)
3. Update DNS records at your registrar
4. Wait for DNS propagation
5. Update `NEXT_PUBLIC_SITE_URL` in Vercel

### Add Analytics (5 minutes)
1. Sign up for Google Analytics
2. Get tracking ID
3. Add to `src/app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

## 🎨 Customization Ideas

### Change Colors
Edit `src/app/globals.css` (lines 4-14) to change the color palette

### Update Hero Message
Edit `src/components/ui/hero-section.tsx` to change your headline

### Add New Page
1. Create folder in `src/app/your-page/`
2. Add `page.tsx` file
3. Update navigation in `src/components/layout/header.tsx`

## 🆘 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Dark mode not working
Clear browser cache and reload

### Contact form not submitting
Check browser console for errors and verify API route

### Styles look broken
Verify you're using Node.js 18+ and Tailwind CSS v4 is installed

## 📚 Learn More

- Full documentation: See `README.md`
- Deployment guide: See `DEPLOYMENT.md`
- Project details: See `PROJECT_SUMMARY.md`

---

**Need help?** Open an issue on GitHub or contact support.
