import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import SEOScripts from "@/components/SEO";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import InitialLoader from "@/components/ui/InitialLoader";
import { Toaster } from "react-hot-toast";

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
        <link rel="canonical" href="https://liin-web.vercel.app/" />
      </head>
      <body className="antialiased">
        <InitialLoader />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#333',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              fontSize: '15px',
              maxWidth: '500px',
            },
            success: {
              style: {
                border: '2px solid #0066CC',
              },
              iconTheme: {
                primary: '#0066CC',
                secondary: '#fff',
              },
            },
            error: {
              style: {
                border: '2px solid #0066CC',
              },
              iconTheme: {
                primary: '#0066CC',
                secondary: '#fff',
              },
            },
            loading: {
              style: {
                border: '2px solid #0066CC',
              },
              iconTheme: {
                primary: '#0066CC',
                secondary: '#fff',
              },
            },
          }}
        />
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
