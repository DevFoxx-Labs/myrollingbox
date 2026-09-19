import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyRollingBox | Safe Packers & Movers | Lockable Container Technology",
  description: "India's #1 safe packers and movers with personal lockable Rolling Box containers. 100% damage-proof household shifting, car/bike transport, office relocation & storage from Prayagraj, Lucknow, Delhi NCR, Mumbai, Bangalore & All India.",
  keywords: [
    "MyRollingBox",
    "Packers and Movers Prayagraj",
    "Packers and Movers Allahabad",
    "Rolling Box Container",
    "Lockable Moving Container",
    "Safe Home Shifting Prayagraj",
    "Agarwal Packers and Movers Prayagraj",
    "Om Packers Prayagraj",
    "Car Transport Prayagraj",
    "Bike Transport Allahabad",
    "Office Relocation Delhi Mumbai Bangalore",
  ],
  authors: [{ name: "MyRollingBox Logistics" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://myrollingbox.com",
    title: "MyRollingBox | Safe Packers & Movers | Lockable Container Technology",
    description: "Personal lockable Rolling Box containers for zero-damage home shifting & vehicle transport across India.",
    siteName: "MyRollingBox",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090e1a] text-slate-100 min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
