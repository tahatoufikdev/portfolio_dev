import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "../globals.css";

const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administration et analytics",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={readex.variable}>
      <body>{children}</body>
    </html>
  );
}
