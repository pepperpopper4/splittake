import type { Metadata } from "next";
import { Syne, DM_Sans, Bebas_Neue, Instrument_Sans, Archivo_Black, Space_Grotesk } from "next/font/google";
import { DesignOptionProvider, DesignSwitcher } from "@/components/DesignOption";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-design="1">
      <body
        id="top"
        className={`${syne.variable} ${dmSans.variable} ${bebas.variable} ${instrument.variable} ${archivoBlack.variable} ${spaceGrotesk.variable} grind-bg antialiased`}
      >
        <DesignOptionProvider>
          <div className="sticky top-0 z-[60]">
            <DesignSwitcher />
            <SiteHeader />
          </div>
          <main className="min-h-[70vh]">{children}</main>
          <SiteFooter />
        </DesignOptionProvider>
      </body>
    </html>
  );
}
