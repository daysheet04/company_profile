import type { Metadata, Viewport } from "next";
import "./globals.css";
import MindAI from "./MindAI";

export const metadata: Metadata = {
  title: "Daysheet",
  description: "Daysheet membantu bisnis membangun spreadsheet, dashboard, reporting, dan workflow automation yang rapi, efisien, dan mudah digunakan.",
  keywords: ["Daysheet", "Google Sheets", "Spreadsheet", "Dashboard", "Apps Script", "Automation"],
  verification: {
    google: "i37eE7r4YsBSh5h3peEClKV-mdhfqZN-r0omO828B9A",
  },
  icons: {
    icon: [{ url: "/logo-daysheet.png", type: "image/png" }],
    shortcut: "/logo-daysheet.png",
    apple: "/logo-daysheet.png",
  },
  other: { "codex-preview": "development" },
  openGraph: {
    title: "Daysheet",
    description: "Sistem spreadsheet, dashboard, pelaporan, dan otomatisasi untuk bisnis yang ingin bekerja lebih rapi.",
    locale: "id_ID",
    siteName: "Daysheet",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}<MindAI /></body></html>;
}
