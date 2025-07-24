// app/layout.jsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import QueryProvider from "@/Provider/QueryProvider";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

// Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Static metadata
// app/layout.tsx or app/page.tsx
export const metadata = {
  title: 'Fiery Grills – Authentic Punjabi Tiffin in Canada',
  description: 'Authentic Punjabi Tiffin in Canada. Enjoy spicy and tasty meals delivered fresh to your door!',
  openGraph: {
    title: 'Fiery Grills – Authentic Punjabi Tiffin in Canada',
    description: 'Authentic Punjabi Tiffin in Canada. Enjoy spicy and tasty meals delivered fresh to your door!',
    url: 'https://fierygrills.com',
    siteName: 'Fiery Grills',
    images: [
      {
        url: '/logos/logo2.png', // must be in /public
        width: 1200,
        height: 630,
        alt: 'Delicious Punjabi Tiffin from Fiery Grills',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiery Grills – Authentic Punjabi Tiffin in Canada',
    description: 'Authentic Punjabi Tiffin in Canada. Enjoy spicy and tasty meals delivered fresh to your door!',
    images: ['/logos/logo2.png'],
  },
  icons: {
    icon: '/logos/logo2.png',
    apple: '/logos/logo2.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Favicon */}
        <link id="favicon" rel="icon" href="/assets/logo1.png" />
        {/* Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />

        {/* Script to swap favicon based on system theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('DOMContentLoaded', () => {
                const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const favicon = document.getElementById('favicon');
                if (favicon) favicon.href = darkMode ? '/assets/logo1.png' : '/assets/logo2.png';
              });
            `,
          }}
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <Toaster />
          {children}
          <MainLayout />
        </QueryProvider>
      </body>
    </html>
  );
}
