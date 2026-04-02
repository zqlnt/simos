import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { AppPreloader } from "@/components/AppPreloader";
import { AppChromeProvider } from "@/context/AppChromeContext";
import { WorldAtmosphere } from "@/components/WorldAtmosphere";
import { media } from "@/lib/media-assets";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Sim",
    template: "%s · Sim",
  },
  description:
    "simOS — simulation control surface for Simium, Simulator, Simulatia, and operations. Sim OS assistant, Zero, and organization dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-h-[100dvh] min-h-[100lvh] bg-[var(--background)] antialiased">
      <head>
        <link rel="preload" href={media.sim.pulsePrimary} as="video" type="video/mp4" />
      </head>
      <body className="relative min-h-[100dvh] min-h-[100lvh] min-h-[-webkit-fill-available]">
        {/* Full-viewport base — fixed layers are siblings of overflow-hidden shell so body overflow does not clip them */}
        <div
          className="app-viewport-layer pointer-events-none fixed inset-0 z-0 bg-[var(--background)]"
          aria-hidden
        />
        <WorldAtmosphere />
        <div
          className="app-chrome-vignette app-chrome-vignette--top"
          aria-hidden
        />
        <div className="app-ui-root-zoom relative z-10 flex h-[100dvh] max-h-[100dvh] min-h-0 flex-col overflow-hidden">
          <AppChromeProvider>
            <AppShell>{children}</AppShell>
          </AppChromeProvider>
        </div>
        <AppPreloader />
      </body>
    </html>
  );
}
