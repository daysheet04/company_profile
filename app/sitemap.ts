import type { MetadataRoute } from "next";
import { portofolioKustom, produkTemplate } from "./data-produk";

const alamatSitus = "https://daysheet.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const tanggalSekarang = new Date();

  const ruteUtama: MetadataRoute.Sitemap = [
    {
      url: alamatSitus,
      lastModified: tanggalSekarang,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${alamatSitus}/produk`,
      lastModified: tanggalSekarang,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const daftarDemo: MetadataRoute.Sitemap = [...produkTemplate, ...portofolioKustom]
    .filter((item) => Boolean(item.slug && item.demoSheet))
    .map((item) => ({
      url: `${alamatSitus}/demo/${encodeURIComponent(item.slug!)}`,
      lastModified: tanggalSekarang,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...ruteUtama, ...daftarDemo];
}
