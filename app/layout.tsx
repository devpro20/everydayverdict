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
      <body className="min-h-full flex flex-col">
        {children}
        <div
          id="avantlink-verification"
          dangerouslySetInnerHTML={{
            __html: `<script type="text/javascript" src="http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=65aa09f8938e53d8ba21c74a754afca0441327e8"></script>`
          }}
        />
      </body>
    </html>
  );
}
