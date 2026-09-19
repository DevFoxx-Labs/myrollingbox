export interface ServiceItem {
  id: string;
  slug: string;
  aliases: string[];
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  longDescription: string;
  heroImage: string;
  keyFeatures: string[];
  benefits: string[];
  recommendedContainers?: {
    name: string;
    type: string;
    capacity: string;
    estPrice: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "service1",
    slug: "home-relocation",
    aliases: ["household-shifting", "home-relocation", "house-movers"],
    title: "Home Relocation",
    subtitle: "Safe & secure moving for your family.",
    badge: "Most Popular",
    description: "Stress-free, 100% damage-proof home relocation for 1 BHK, 2 BHK, 3 BHK, and luxury villas with lockable Rolling Boxes.",
    longDescription: "MyRollingBox delivers premier home shifting services in Prayagraj (Allahabad), Lucknow, Delhi NCR, Mumbai, Bangalore, and across India. Our specialized crew packs every furniture piece, electronic item, and fragile glassware using multi-layer protective sheet wrapping, bubble padding, and custom wooden crating. All goods are loaded into dedicated, sealed Rolling Box containers.",
    heroImage: "/images/services/home_relocation.jpg",
    keyFeatures: [
      "Zero-Damage Guarantee with 7-Layer Protective Packaging",
      "Dedicated Lockable Container — Customer Keeps the Key",
      "Free On-Site or Video Survey & Instant Transparent Quote",
      "Expert Furniture Disassembly & Reassembly (Beds, Wardrobes, ACs)",
      "Full Transit Insurance Cover & Real-Time GPS Tracking",
    ],
    benefits: [
      "No risk of item loss or theft thanks to customer-owned key locking",
      "Clean, sanitized, moisture-proof Rolling Box containers",
      "Punctual delivery schedule with dedicated supervisor",
    ],
    recommendedContainers: [
      { name: "Rolling Box Mini (150 cu.ft)", type: "1 BHK / Studio Flat", capacity: "Up to 1.5 Tons", estPrice: "₹4,500 - ₹8,500" },
      { name: "Rolling Box Standard (300 cu.ft)", type: "2 BHK / 3 BHK Compact", capacity: "Up to 3.5 Tons", estPrice: "₹8,500 - ₹16,000" },
    ],
    faqs: [
      { question: "How does the Rolling Box personal lock system work?", answer: "Once your goods are loaded into the Rolling Box container, the container is locked in front of you. You hold the master key and unlock it upon arrival at your new destination." },
    ]
  },
  {
    id: "service2",
    slug: "office-relocation",
    aliases: ["office-shifting", "commercial-moving", "corporate-relocation"],
    title: "Office Relocation",
    subtitle: "Minimal downtime, maximum productivity.",
    badge: "Corporate Choice",
    description: "Seamless commercial relocation tailored for corporate offices, IT infrastructure, banks, government institutions, and retail setups.",
    longDescription: "MyRollingBox specializes in commercial and office relocation designed to minimize business downtime. We operate weekend and overnight moving schedules for IT hubs, corporate offices, banks, and educational institutions.",
    heroImage: "/images/services/office_relocation.jpg",
    keyFeatures: [
      "Weekend & Overnight Shifting options for Zero Business Downtime",
      "Anti-Static bubble wrapping & anti-shock server rack containers",
      "Color-coded inventory tagging for every employee workstation",
    ],
    benefits: [
      "Smooth resumption of office operations on Monday morning",
      "High confidentiality and secure handling of sensitive files",
    ],
    faqs: [
      { question: "Can MyRollingBox handle weekend office shifts?", answer: "Yes! We specialize in Friday night to Sunday night shifts so your office is fully operational by Monday morning." },
    ]
  },
  {
    id: "service3",
    slug: "car-bike-transport",
    aliases: ["car-carrier", "bike-transport", "vehicle-shifting"],
    title: "Car & Bike Transport",
    subtitle: "Door-to-door vehicle transportation across India.",
    badge: "Safe Auto Transit",
    description: "Scratch-free car shipping in covered multi-car carriers and dedicated bike safety boxes with door-to-door pickup and delivery.",
    longDescription: "Moving your sedan, SUV, electric vehicle, or high-end motorcycle requires specialized automotive logistics. MyRollingBox operates enclosed car carrier trucks equipped with wheel stoppers and hydraulic loading ramps.",
    heroImage: "/images/services/vehicle_transport.jpg",
    keyFeatures: [
      "Enclosed Car Carriers protecting vehicles from dust and weather",
      "Custom Bike Packing Frames with scratch-resistant foam wraps",
      "Pre-trip vehicle condition inspection report",
    ],
    benefits: [
      "Zero unnecessary odometer miles accumulated during move",
      "Doorstep pickup and destination delivery",
    ],
    faqs: [
      { question: "What documents are required for vehicle transport?", answer: "You need to provide copies of the Vehicle Registration Certificate (RC), valid insurance policy, driver's ID, and PUC certificate." },
    ]
  },
  {
    id: "service4",
    slug: "storage-solutions",
    aliases: ["warehousing", "goods-storage", "self-storage"],
    title: "Storage Solutions",
    subtitle: "Short & long-term storage options.",
    badge: "Secure Storage",
    description: "Flexible, affordable, moisture-free storage units for household furniture, excess inventory, and commercial goods.",
    longDescription: "Whether you are renovating your house, relocating abroad temporarily, or need overflow warehouse space, MyRollingBox provides private, palletized, clean storage facilities.",
    heroImage: "/images/services/storage_solutions.jpg",
    keyFeatures: [
      "24/7 CCTV Security Surveillance & Guard Patrols",
      "Pest-Controlled, Moisture-Free & Dust-Free Warehousing",
      "Private Lockable Storage Units & Pallet Racks",
    ],
    benefits: [
      "Pay only for the exact volume or duration you use",
      "Zero damage from humidity or dust during long storage",
    ],
    faqs: [
      { question: "What is the minimum period for warehouse storage?", answer: "Our minimum storage plan starts at just 15 days, with flexible extension options." },
    ]
  },
  {
    id: "service5",
    slug: "loading-unloading",
    aliases: ["labor-services", "loading-services"],
    title: "Loading & Unloading",
    subtitle: "Trained professionals for safe handling.",
    badge: "Professional Handling",
    description: "Uniformed, background-verified labor experts equipped with safety straps, hydraulic dollies, and ramps.",
    longDescription: "Our professional loading and unloading teams ensure heavy furniture, double-door refrigerators, glass cabinets, and pianos are safely moved through narrow hallways and staircases.",
    heroImage: "/images/services/loading_unloading.jpg",
    keyFeatures: [
      "Heavy-duty furniture lifting straps & hydraulic trolleys",
      "Careful handling of narrow staircases & high-rise elevators",
      "Trained local crew fluent in Hindi & English",
    ],
    benefits: [
      "Zero injury risk to family members",
      "Fast & organized loading/unloading in 2-4 hours",
    ],
    faqs: [
      { question: "Is loading and unloading included in household shifting?", answer: "Yes, loading and unloading are fully included in all complete relocation packages." },
    ]
  },
  {
    id: "service6",
    slug: "insurance-assistance",
    aliases: ["transit-insurance", "cargo-insurance"],
    title: "Insurance Assistance",
    subtitle: "Your belongings protected at every step.",
    badge: "100% Protection",
    description: "Comprehensive transit risk cover protecting your valuable cargo against accidental road mishaps, natural hazards, or fire.",
    longDescription: "We provide hassle-free transit insurance claim assistance with fast document verification so you have complete financial security throughout the journey.",
    heroImage: "/images/services/insurance_assistance.jpg",
    keyFeatures: [
      "Full inventory declared value transit protection",
      "Fast claim settlement support with minimal documentation",
      "Cover against accident, fire, overturn, or theft",
    ],
    benefits: [
      "Complete peace of mind on long intercity routes",
      "Transparent policy terms",
    ],
    faqs: [
      { question: "What percentage is charged for transit insurance?", answer: "Standard transit insurance is typically calculated at 3% of the total declared value of goods." },
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find(
    (item) => item.slug === slug || item.aliases.includes(slug)
  );
}
