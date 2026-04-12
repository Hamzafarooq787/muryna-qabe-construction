import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MURYNA QABE LTD | Quality Construction Services",
  description:
    "MURYNA QABE LTD offers premium building materials, construction tools, joinery, landscaping products, and plant hire in Stoke-on-Trent, UK.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MURYNA QABE LTD | Quality Construction Services",
    description:
      "Premium building materials and construction solutions for every project. Based in Stoke-on-Trent, UK.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MURYNA QABE LTD - Quality Construction Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MURYNA QABE LTD | Quality Construction Services",
    description:
      "Premium building materials and construction solutions for every project.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${workSans.variable} ${inter.variable}`}
    >
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,1"
        />
      </head>

      <body className="bg-[#0f172a] text-gray-200 font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
