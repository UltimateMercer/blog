import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Inter, Barlow, JetBrains_Mono } from "next/font/google";
import "@/assets/blklight.scss";
import { NavigationBar } from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { Html } from "@/components/html";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.ultimatemercer.com"),
  title: {
    default: "Blog by Ultimate Mercer",
    template: "%s - Blog by Ultimate Mercer",
  },
  description: "Blog by Ultimate Mercer",
  alternates: {
    canonical: "/",
  },
  // Open Graph metadata for rich previews on social media platforms
  openGraph: {
    title: "Blog by Ultimate Mercer",
    description: "Blog by Ultimate Mercer",
    url: "https://blog.ultimatemercer.com",
    siteName: "Blog",
    images: [
      {
        url: "https://blog.ultimatemercer.com/ultimate-mercer-base.jpg",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog by Ultimate Mercer",
    description: "Blog by Ultimate Mercer",
    creator: "@ultimatemercer",
    images: ["https://blog.ultimatemercer.com/ultimate-mercer-base.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${barlow.variable} ${jetBrainsMono.variable} font-sans background-texture antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </Html>
  );
}
