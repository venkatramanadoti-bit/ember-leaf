import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ember & Leaf | Premium Café & Restaurant in Banjara Hills",
  description: "Experience premium food, handcrafted beverages and warm hospitality at Ember & Leaf Café & Restaurant in Banjara Hills, Hyderabad.",
  keywords: ["restaurant", "cafe", "fine dining", "Banjara Hills", "Hyderabad", "food", "brunch", "dinner", "reservation"],
  authors: [{ name: "Ember & Leaf" }],
  creator: "Ember & Leaf",
  publisher: "Ember & Leaf",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://emberandleaf.in",
    siteName: "Ember & Leaf",
    title: "Ember & Leaf | Premium Café & Restaurant in Banjara Hills",
    description: "Experience premium food, handcrafted beverages and warm hospitality at Ember & Leaf Café & Restaurant in Banjara Hills, Hyderabad.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ember & Leaf Restaurant Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember & Leaf | Premium Café & Restaurant",
    description: "Experience premium food, handcrafted beverages and warm hospitality at Ember & Leaf.",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#17130F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}