"use client";

import React, { useState } from "react";
import NavbarNeo from "@/components/NavbarNeo";
import HeroNeo from "@/components/HeroNeo";
import TrustBarNeo from "@/components/TrustBarNeo";
import ServicesBentoNeo from "@/components/ServicesBentoNeo";
import VerificationNeo from "@/components/VerificationNeo";
import PackagingNeo from "@/components/PackagingNeo";
import RatesCalculatorNeo from "@/components/RatesCalculatorNeo";
import BranchesAndReviewsNeo from "@/components/BranchesAndReviewsNeo";
import FAQSection from "@/components/FAQSection";
import ContactLocations from "@/components/ContactLocations";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import TrackingModal from "@/components/TrackingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingModalData, setBookingModalData] = useState<any>(null);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const handleOpenBookingModal = (dataOrService?: any) => {
    if (typeof dataOrService === "string") {
      setBookingModalData({ moveType: dataOrService });
    } else if (dataOrService) {
      setBookingModalData(dataOrService);
    } else {
      setBookingModalData(null);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0E17] text-white">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "MyRollingBox Packers & Movers",
            image: "https://myrollingbox.com/images/hero_delivery.jpg",
            "@id": "https://myrollingbox.com/#organization",
            url: "https://myrollingbox.com",
            telephone: "+91-9300300300",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Civil Lines & Naini Industrial Area",
              addressLocality: "Prayagraj",
              addressRegion: "Uttar Pradesh",
              postalCode: "211001",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <NavbarNeo
        onOpenBookingModal={handleOpenBookingModal}
        onOpenTrackingModal={() => setIsTrackingModalOpen(true)}
      />

      <main className="flex-1">
        <HeroNeo
          onOpenBookingModal={handleOpenBookingModal}
          onOpenTrackingModal={() => setIsTrackingModalOpen(true)}
        />
        <TrustBarNeo />
        <ServicesBentoNeo onOpenBookingModal={handleOpenBookingModal} />
        <VerificationNeo />
        <PackagingNeo />
        <RatesCalculatorNeo onOpenBookingModal={handleOpenBookingModal} />
        <BranchesAndReviewsNeo onOpenBookingModal={handleOpenBookingModal} />
        <FAQSection />
        <ContactLocations />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={bookingModalData}
      />

      <TrackingModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
      />
    </div>
  );
}
