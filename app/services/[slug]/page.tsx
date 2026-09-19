import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

const siteUrl = "https://myrollingbox.com";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | MyRollingBox Packers & Movers",
    };
  }

  const canonicalUrl = `${siteUrl}/services/${service.slug}`;

  return {
    title: `${service.title} | MyRollingBox Safe Relocation`,
    description: `${service.subtitle}. ${service.description} Personal lockable Rolling Box container safety from Prayagraj to all India. Call +91 98765 43210.`,
    keywords: [
      service.title,
      `${service.title} Prayagraj`,
      `${service.title} Allahabad`,
      `${service.title} Delhi Mumbai Bangalore`,
      "MyRollingBox",
      "Lockable Container Movers",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: canonicalUrl,
      title: `${service.title} | MyRollingBox Packers & Movers`,
      description: service.description,
      siteName: "MyRollingBox",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${service.slug}#service`,
        name: service.title,
        description: service.description,
        provider: {
          "@type": "MovingCompany",
          name: "MyRollingBox Packers & Movers",
          telephone: "+91-9876543210",
          url: siteUrl,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: service.badge,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
