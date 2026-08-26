import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daysheet",
  description: "Daysheet membantu bisnis membangun spreadsheet, dashboard, reporting, dan workflow automation yang rapi, efisien, dan mudah digunakan.",
  keywords: ["Daysheet", "Google Sheets", "Spreadsheet", "Dashboard", "Apps Script", "Automation"],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
