import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { CommandPalette } from "@/components/features/command-palette";
import { AnimatedBackground } from "@/components/features/animated-background";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanush S | DevOps Engineer & Java Developer",
  description: "Portfolio of Dhanush S, showcasing expertise in DevOps, Cloud Computing, and scalable backend applications using Java.",
  keywords: ["DevOps", "Java Developer", "Cloud Engineer", "React", "Next.js", "Spring Boot", "Docker", "Kubernetes"],
  authors: [{ name: "Dhanush S", url: "https://dhanushs.in" }],
  creator: "Dhanush S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhanushs.in",
    title: "Dhanush S | DevOps Engineer",
    description: "Portfolio of Dhanush S, showcasing expertise in DevOps, Cloud Computing, and scalable backend applications.",
    siteName: "Dhanush S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush S | DevOps Engineer",
    description: "Portfolio of Dhanush S, showcasing expertise in DevOps, Cloud Computing, and scalable backend applications.",
    creator: "@dhanushs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground`}
      >
        <LenisProvider>
          <AnimatedBackground />
          <CustomCursor />
          <CommandPalette />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
