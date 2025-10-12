# Portfolio Website

A modern, performant portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Features smooth animations, dark mode support, and SEO optimization.

## 🚀 Features

- ⚡ **Next.js 15** with App Router and React Server Components
- 🎨 **Tailwind CSS v4** with custom color palette using oklch() color space
- 🌗 **Dark Mode** support with next-themes
- ✨ **Smooth Animations** with Framer Motion
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with JSON-LD structured data
- 📝 **Contact Form** with validation (React Hook Form + Zod)
- 🎯 **Type-Safe** with TypeScript
- ♿ **Accessible** with ARIA labels and semantic HTML
- 🚀 **Performance Optimized** with Next.js Image and code splitting

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your information

5. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Update Personal Information

1. **Contact Information**: Update in `src/app/contact/page.tsx`, `src/app/api/contact/route.ts`, and `.env.local`
2. **Social Links**: Update in `src/components/layout/footer.tsx` and `src/components/layout/header.tsx`
3. **Personal Data**: Update in `src/lib/structured-data.tsx` and `src/app/layout.tsx`

### Update Content

1. **Projects**: Edit `src/data/content.ts`
2. **Services**: Edit `src/data/content.ts`
3. **Testimonials**: Edit `src/data/content.ts`
4. **About Page**: Edit `src/app/about/page.tsx`
5. **Homepage Hero**: Edit `src/components/ui/hero-section.tsx`

### Customize Colors

Colors are defined in `src/app/globals.css` using oklch() color space. Light and dark mode colors are set in the `:root` and `:root.dark` selectors.

## 📧 Email Setup

The contact form requires an email service. Options: Resend, SendGrid, or custom SMTP. See `.env.example` for configuration.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Other Platforms

Can be deployed to Netlify, Railway, Render, AWS Amplify, or DigitalOcean App Platform.

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── data/           # Content data
│   ├── lib/            # Utility functions
│   ├── providers/      # React providers
│   └── types/          # TypeScript types
├── .env.example        # Environment variables template
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies
```

## 🧪 Testing

```bash
npm run lint    # Linting
npm run build   # Build for production
```

## 📄 License

MIT License

## 👤 Author

**Your Name**
- Website: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
