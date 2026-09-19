"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyMyRollingBox from "@/components/WhyMyRollingBox";
import BookingProcess from "@/components/BookingProcess";
import RatesCalculator from "@/components/RatesCalculator";
import CityCoverage from "@/components/CityCoverage";
import Reviews from "@/components/Reviews";
import FAQSection from "@/components/FAQSection";
import BottomCTABanner from "@/components/BottomCTABanner";
import ContactLocations from "@/components/ContactLocations";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingModalData, setBookingModalData] = useState<any>(null);

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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: "MyRollingBox Packers & Movers",
            image: "https://myrollingbox.com/images/hero_rollingbox.jpg",
            "@id": "https://myrollingbox.com/#organization",
            url: "https://myrollingbox.com",
            telephone: "+91-9876543210",
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

      <Navbar onOpenBookingModal={handleOpenBookingModal} />
      
      <main className="flex-1">
        <Hero onOpenBookingModal={handleOpenBookingModal} />
        <Services onOpenBookingModal={handleOpenBookingModal} />
        <WhyMyRollingBox onOpenBookingModal={() => handleOpenBookingModal()} />
        <BookingProcess onOpenBookingModal={() => handleOpenBookingModal()} />
        <RatesCalculator onOpenBookingModal={handleOpenBookingModal} />
        <CityCoverage onOpenBookingModal={handleOpenBookingModal} />
        <Reviews />
        <FAQSection />
        <BottomCTABanner onOpenBookingModal={() => handleOpenBookingModal()} />
        <ContactLocations />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={bookingModalData}
      />
    </div>
  );
}
