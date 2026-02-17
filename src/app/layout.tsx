import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { UIProvider } from "@/context/UIContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "DiaraBi | Gestion Boutique",
  description: "L'application de gestion simplifiée pour les commerçants du Sénégal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${outfit.className}`}>
        <UIProvider>
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, minHeight: '100vh', width: '100%' }}>
              {children}
            </div>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
