import type { Metadata } from "next";
import LenisProvider from "../providers/LenisProvider";
import ThemeProvider from "../providers/ThemeProvider";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Navbar from "@/components/ui/Navbar";
import "../globals.css";

export const metadata: Metadata = {
  title: "AI News & Growth Blog",
  description: "A futuristic AI-powered blog for insights and innovation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            <NoiseOverlay />
            <main className="page-transition">{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
