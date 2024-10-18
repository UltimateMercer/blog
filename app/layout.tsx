import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "@/assets/blklight.scss";
import { NavigationBar } from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { Html } from "@/components/html";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
  title: {
    default: "Blog - Ultimate Mercer",
    template: "%s - Blog - Ultimate Mercer",
  },
  description: "Blog - Ultimate Mercer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans background-texture antialiased`}
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
