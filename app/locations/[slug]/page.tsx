import { notFound } from "next/navigation";
import { locationsData, getLocationBySlug } from "@/data/locationsData";
import LocationDetailClient from "./LocationDetailClient";
import type { Metadata } from "next";

const siteUrl = "https://myrollingbox.com";

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | MyRollingBox Packers & Movers",
    };
  }

  const canonicalUrl = `${siteUrl}/locations/${location.slug}`;

  return {
    title: `${location.title} | Personal Lockable Rolling Box Movers`,
    description: `${location.tagline}. ${location.description} Doorstep survey & zero damage relocation across ${location.cityName}. Call +91 98765 43210.`,
    keywords: [
      location.title,
      `Packers and Movers ${location.cityName}`,
      `Home Shifting ${location.cityName}`,
      `Car Bike Transport ${location.cityName}`,
      "MyRollingBox",
      "Lockable Moving Container",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonicalUrl,
      title: `${location.title} | MyRollingBox`,
      description: location.description,
      siteName: "MyRollingBox",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": `${siteUrl}/locations/${location.slug}#office`,
        name: `MyRollingBox Packers & Movers ${location.cityName}`,
        description: location.description,
        url: `${siteUrl}/locations/${location.slug}`,
        telephone: "+91-9876543210",
        areaServed: {
          "@type": "City",
          name: location.cityName,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationDetailClient location={location} />
    </>
  );
}
