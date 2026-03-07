import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quoterly | Stop Overpaying for Home Projects",
  description: "Quoterly validates contractor quotes against real market data so you always know if you're being charged fairly. Quote scanning, price intelligence, negotiation manager and more.",
  metadataBase: new URL("https://quoterly.app"),
  alternates: {
    canonical: "https://quoterly.app/",
  },
  openGraph: {
    title: "Quoterly | Stop Overpaying for Home Projects",
    description: "Validate contractor quotes against real market data. Know exactly what's fair before you sign.",
    url: "https://quoterly.app",
    siteName: "Quoterly",
    type: "website",
    images: [{ url: "/og-image.png", width: 1024, height: 500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quoterly | Stop Overpaying for Home Projects",
    description: "Validate contractor quotes against real market data. Know exactly what's fair before you sign.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XJ54SJCXTZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJ54SJCXTZ');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
