import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { locationsData } from "@/data/locationsData";

const siteUrl = "https://myrollingbox.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationPages = locationsData.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
