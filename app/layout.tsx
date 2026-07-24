import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://everydayverdict.com'), // Replace with actual domain when going live
  title: {
    default: "everydayverdict | Modern Tech Reviews",
    template: "%s | everydayverdict",
  },
  description: "The ultimate destination for in-depth technology reviews, 3D printing guides, and modern tech gear analysis.",
  openGraph: {
    title: "everydayverdict | Modern Tech Reviews",
    description: "The ultimate destination for in-depth technology reviews, 3D printing guides, and modern tech gear analysis.",
    url: 'https://everydayverdict.com',
    siteName: 'everydayverdict',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'everydayverdict',
    description: "In-depth technology reviews, 3D printing guides, and modern tech gear analysis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
