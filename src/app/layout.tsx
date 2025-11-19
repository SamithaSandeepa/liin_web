import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import SEOScripts from "@/components/SEO";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimationProvider from "@/components/AnimationProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

/**
 * Root Layout - Shared layout for all pages
 *
 * This layout wraps all pages and includes:
 * - Header (navigation)
 * - Footer
 * - AnimationProvider (client-side scroll animations)
 * - SEO scripts
 *
 * Benefits:
 * - No need to import Header/Footer on each page
 * - Consistent layout across the entire app
 * - Header/Footer don't re-render on page navigation
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://liin.lk" />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <AnimationProvider />
        <SEOScripts schemas={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
