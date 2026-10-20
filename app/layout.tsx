import type { Metadata, Viewport } from "next";
import "./globals.css";
import MindAI from "./MindAI";

export const metadata: Metadata = {
  metadataBase: new URL("https://daysheet.my.id"),
  title: {
    default: "Daysheet — Jasa Pembuatan Template & Sistem Spreadsheet Otomatis",
    template: "%s | Daysheet",
  },
  description:
    "Jasa pembuatan custom spreadsheet, dashboard bisnis interaktif, template Google Sheets & Excel siap pakai, serta otomatisasi workflow untuk UMKM dan profesional.",
  keywords: [
    "Daysheet",
    "jasa spreadsheet",
    "jasa google sheets",
    "jasa excel indonesia",
    "template spreadsheet",
    "template google sheets",
    "dashboard bisnis excel",
    "financial planner spreadsheet",
    "inventory control spreadsheet",
    "otomatisasi spreadsheet",
    "google apps script",
    "sistem keuangan fnb excel",
  ],
  authors: [{ name: "Daysheet", url: "https://daysheet.my.id" }],
  creator: "Daysheet",
  publisher: "Daysheet",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "i37eE7r4YsBSh5h3peEClKV-mdhfqZN-r0omO828B9A",
  },
  icons: {
    icon: [{ url: "/optimized/logo-daysheet-192.png", type: "image/png" }],
    shortcut: "/optimized/logo-daysheet-192.png",
    apple: "/optimized/logo-daysheet-192.png",
  },
  other: { "codex-preview": "development" },
  openGraph: {
    title: "Daysheet — Jasa Pembuatan Template & Sistem Spreadsheet Otomatis",
    description:
      "Sistem spreadsheet, dashboard bisnis, pelaporan, dan otomatisasi untuk bisnis yang ingin bekerja lebih rapi dan efisien.",
    url: "https://daysheet.my.id",
    siteName: "Daysheet",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/Financev3.png",
        width: 1200,
        height: 630,
        alt: "Daysheet — Spreadsheet Systems & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daysheet — Jasa Pembuatan Template & Sistem Spreadsheet Otomatis",
    description:
      "Sistem spreadsheet, dashboard bisnis, pelaporan, dan otomatisasi untuk bisnis yang ingin bekerja lebih rapi dan efisien.",
    images: ["/Financev3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://daysheet.my.id/#organization",
      name: "Daysheet",
      url: "https://daysheet.my.id",
      logo: "https://daysheet.my.id/optimized/logo-daysheet-192.png",
      description:
        "Penyedia jasa pembuatan spreadsheet kustom, dashboard bisnis interaktif, dan template sistem otomatisasi Google Sheets & Excel.",
      telephone: "+6285117238331",
      sameAs: [
        "https://www.instagram.com/daysheet.id/",
        "https://www.tiktok.com/@daysheet.id",
        "https://id.linkedin.com/company/daysheet",
        "https://lynk.id/daysheet",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6285117238331",
        contactType: "customer service",
        availableLanguage: ["id", "en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://daysheet.my.id/#website",
      url: "https://daysheet.my.id",
      name: "Daysheet",
      description: "Jasa Pembuatan Template & Sistem Spreadsheet Otomatis",
      publisher: {
        "@id": "https://daysheet.my.id/#organization",
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://daysheet.my.id/#service",
      name: "Daysheet — Jasa Sistem Spreadsheet & Otomatisasi",
      url: "https://daysheet.my.id",
      image: "https://daysheet.my.id/Financev3.png",
      telephone: "+6285117238331",
      priceRange: "$$",
      areaServed: "ID",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        {children}
        <MindAI />
      </body>
    </html>
  );
}

