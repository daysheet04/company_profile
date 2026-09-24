import type { MetadataRoute } from "next";

const alamatSitus = "https://daysheet-id.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: alamatSitus,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${alamatSitus}/produk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
