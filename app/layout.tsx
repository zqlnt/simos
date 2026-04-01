import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { AppChromeProvider } from "@/context/AppChromeContext";

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
    <html lang="en" className="h-full min-h-0 antialiased">
      <body className="h-full min-h-0 overflow-hidden">
        <AppChromeProvider>
          <AppShell>{children}</AppShell>
        </AppChromeProvider>
      </body>
    </html>
  );
}
