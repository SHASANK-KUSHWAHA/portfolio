import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/animations/FloatingParticles";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shasank - Full Stack Developer",
  description: "Passionate Full Stack Developer building innovative web applications and creating seamless digital experiences.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Shasank" }],
  openGraph: {
    title: "Shasank - Full Stack Developer",
    description: "Passionate Full Stack Developer building innovative web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-background-dark text-text-light min-h-screen">
        <FloatingParticles />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
