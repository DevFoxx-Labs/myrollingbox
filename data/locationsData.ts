export interface LocationItem {
  id: string;
  slug: string;
  cityName: string;
  state: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  heroImage: string;
  coveredAreas: string[];
  popularRoutes: {
    destination: string;
    distance: string;
    estDuration: string;
    startingPrice: string;
  }[];
  ratesTable: {
    type: string;
    localRate: string;
    intercityRate: string;
    packingTime: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const locationsData: LocationItem[] = [
  {
    id: "loc-prayagraj",
    slug: "prayagraj-allahabad-packers-movers",
    cityName: "Prayagraj (Allahabad)",
    state: "Uttar Pradesh",
    title: "Packers and Movers in Prayagraj (Allahabad)",
    tagline: "Primary Regional Hub | 100% Lockable Rolling Box Containers & Local Shifting",
    badge: "Head Hub",
    description: "Top-rated packers and movers in Prayagraj (Allahabad) offering safe home shifting, car & bike transportation, office moving, and warehouse storage with personal lock Rolling Boxes.",
    heroImage: "/images/locations/prayagraj.jpg",
    coveredAreas: [
      "Civil Lines", "Katra", "Naini", "Phaphamau", "Jhalwa", "Ashok Nagar", 
      "Mumfordganj", "George Town", "Preetam Nagar", "Teliyarganj", "Tagore Town", 
      "Allahabad Cantonment", "Rajruppur", "Dhoomanganj", "Govindpur"
    ],
    popularRoutes: [
      { destination: "Prayagraj ➔ Delhi", distance: "650 km", estDuration: "24-36 Hours", startingPrice: "₹6,900" },
      { destination: "Prayagraj ➔ Mumbai", distance: "1,350 km", estDuration: "48-72 Hours", startingPrice: "₹12,000" },
      { destination: "Prayagraj ➔ Bangalore", distance: "1,700 km", estDuration: "3-4 Days", startingPrice: "₹14,500" },
      { destination: "Prayagraj ➔ Hyderabad", distance: "1,200 km", estDuration: "36-48 Hours", startingPrice: "₹11,000" },
      { destination: "Prayagraj ➔ Kolkata", distance: "800 km", estDuration: "24-36 Hours", startingPrice: "₹11,200" },
    ],
    ratesTable: [
      { type: "1 BHK Flat", localRate: "₹3,500 - ₹6,500", intercityRate: "₹6,900 - ₹12,000", packingTime: "3-5 Hours" },
      { type: "2 BHK Flat", localRate: "₹6,500 - ₹10,500", intercityRate: "₹12,000 - ₹18,000", packingTime: "5-7 Hours" },
      { type: "3 BHK House", localRate: "₹10,500 - ₹16,000", intercityRate: "₹14,500 - ₹25,000", packingTime: "1 Day" },
      { type: "Car Transport (Covered)", localRate: "N/A", intercityRate: "₹7,500 - ₹14,000", packingTime: "1 Hour" },
      { type: "Bike Transport", localRate: "N/A", intercityRate: "₹2,500 - ₹5,000", packingTime: "30 Mins" },
    ],
    faqs: [
      { question: "Where is the MyRollingBox office in Prayagraj?", answer: "Our main regional hub is conveniently located near Civil Lines & Naini Industrial Area in Prayagraj with daily dispatch trucks." },
      { question: "Do you offer doorstep survey in Prayagraj?", answer: "Yes! We provide free doorstep inspection in Civil Lines, Katra, Jhalwa, Naini, Phaphamau, and all surrounding areas of Prayagraj." },
      { question: "How safe are Rolling Box containers during Prayagraj monsoon?", answer: "Our Rolling Boxes feature triple rubber weather seals and heavy-duty polypropylene bodies that keep your goods 100% dry and dust-free." }
    ]
  },
  {
    id: "loc-delhi",
    slug: "delhi-ncr-packers-movers",
    cityName: "Delhi NCR",
    state: "Delhi / Haryana / UP",
    title: "Packers and Movers in Delhi NCR",
    tagline: "Capital Hub | Daily Express Rolling Box Containers to UP & South India",
    badge: "Metro Hub",
    description: "Professional relocation services across Delhi, Gurgaon, Noida, Greater Noida, and Ghaziabad with lockable container safety.",
    heroImage: "/images/locations/delhi.jpg",
    coveredAreas: [
      "Gurgaon (DLF Cyber City, Sec 56)", "Noida (Sec 62, Sec 18, Greater Noida)", 
      "Dwarka", "South Delhi (Vasant Kunj, Saket)", "Rohini", "Ghaziabad (Indirapuram, Vaishali)"
    ],
    popularRoutes: [
      { destination: "Delhi NCR ➔ Prayagraj", distance: "650 km", estDuration: "24-36 Hours", startingPrice: "₹6,900" },
      { destination: "Delhi NCR ➔ Mumbai", distance: "1,400 km", estDuration: "48 Hours", startingPrice: "₹15,000" },
      { destination: "Delhi NCR ➔ Bangalore", distance: "2,150 km", estDuration: "4-5 Days", startingPrice: "₹18,000" },
    ],
    ratesTable: [
      { type: "1 BHK Flat", localRate: "₹4,500 - ₹7,500", intercityRate: "₹9,500 - ₹16,000", packingTime: "4 Hours" },
      { type: "2 BHK Flat", localRate: "₹7,500 - ₹12,000", intercityRate: "₹14,000 - ₹24,000", packingTime: "6 Hours" },
    ],
    faqs: [
      { question: "Are there no-entry time restrictions for trucks in Delhi NCR?", answer: "We schedule our container trucks outside commercial no-entry hours or use green-permit commercial vehicles for smooth moving." }
    ]
  }
];

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locationsData.find((item) => item.slug === slug);
}
