import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Transforming Ideas into Modern Websites",
    template: "%s | Portfolio",
  },
  description: "I design, build, and maintain Next.js websites that load quickly, convert users, and are easy to manage. Let's craft your next digital experience.",
  keywords: ["Next.js", "React", "Web Development", "TypeScript", "Tailwind CSS", "Full Stack Developer", "Frontend Development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Portfolio",
    title: "Portfolio - Transforming Ideas into Modern Websites",
    description: "Professional Next.js developer creating fast, modern, and scalable websites.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Transforming Ideas into Modern Websites",
    description: "Professional Next.js developer creating fast, modern, and scalable websites.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
