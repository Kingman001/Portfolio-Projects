
import React from 'react';
import { Sprout, Factory, Truck, Users } from 'lucide-react';

export const SERVICES = [
  {
    id: 'crop-production',
    title: 'Crop Production',
    description: 'Specializing in large-scale cultivation of Yellow Maize, Soybeans, and Cassava using sustainable agronomic practices.',
    icon: <Sprout className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'agro-processing',
    title: 'Agro-Processing',
    description: 'Adding value to farm produce through modern processing, including our premium Glean Garri and Cassava Starch production.',
    icon: <Factory className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'distribution',
    title: 'Logistics & Distribution',
    description: 'Efficient supply chain management ensuring farm-fresh products reach industrial and retail consumers across Nigeria.',
    icon: <Truck className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'consultancy',
    title: 'Farm Management',
    description: 'Professional advisory services for yield optimization, soil health management, and sustainable farming business models.',
    icon: <Users className="w-8 h-8 text-emerald-600" />
  }
];

export const PRODUCTS = [
  {
    id: '1',
    name: 'Premium Glean Garri',
    category: 'Consumer',
    price: 24500,
    priceLabel: '₦24,500/bag',
    image: 'https://images.unsplash.com/photo-1623855215024-850f2249c362?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1623855215024-850f2249c362?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Our flagship consumer product. Clean, white, and crispy garri processed from high-quality cassava tubers. Zero additives, just pure taste.'
  },
  {
    id: '2',
    name: 'Industrial Yellow Maize',
    category: 'Industrial',
    price: 0, // Market Price
    priceLabel: 'Market Price',
    image: 'https://images.unsplash.com/photo-1551733938-207ed77d65b1?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1551733938-207ed77d65b1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1533241242078-433b9cc2b89f?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Optimized for poultry feed and starch production. High moisture control and nutrient density.'
  },
  {
    id: '3',
    name: 'Clean Soybeans',
    category: 'Industrial',
    price: 0,
    priceLabel: 'Market Price',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530224416914-99692476059d?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Premium grade soybeans harvested and sorted for industrial processing into oil and animal feed meal.'
  },
  {
    id: '4',
    name: 'High Quality Cassava Flour',
    category: 'Industrial',
    price: 0,
    priceLabel: 'Market Price',
    image: 'https://images.unsplash.com/photo-1627485750519-2f22822a1888?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1627485750519-2f22822a1888?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1589113331515-99d997d89679?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Industrial-grade flour suitable for baking and food industry applications. High starch content and neutral flavor profile.'
  },
  {
    id: '5',
    name: 'Glean Honey',
    category: 'Consumer',
    price: 4500,
    priceLabel: '₦4,500/bottle',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Pure, raw honey harvested from our integrated farm apiaries. Unfiltered and rich in natural nutrients.'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Olusola Adegoke',
    role: 'Chief Executive Officer',
    category: 'Management',
    bio: 'With over 20 years in Nigerian agribusiness, Olusola leads the strategic vision for Glean Agro.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Sarah Adeyemi',
    role: 'Chief Operations Officer',
    category: 'Management',
    bio: 'Expert in supply chain logistics and industrial processing management.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Kenneth Okafor',
    role: 'Chief Financial Officer',
    category: 'Management',
    bio: 'Seasoned financial analyst with a focus on sustainable investment and agricultural funding.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Dr. Fatima Yusuf',
    role: 'Chief Sustainability Officer',
    category: 'Management',
    bio: 'Specialist in environmental impact and regenerative farming practices.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    name: 'Prof. Ibrahim Bello',
    role: 'Agricultural Science Lead',
    category: 'Advisory',
    bio: 'Renowned agronomist specializing in sustainable tropical farming practices.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    name: 'Engr. David Okeke',
    role: 'Tech & Infrastructure Advisor',
    category: 'Advisory',
    bio: 'Driving technological innovation across our farming complexes.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 7,
    name: 'Dr. Marcus Thorne',
    role: 'Strategic Partnership Advisor',
    category: 'Advisory',
    bio: 'Expert in international trade and global agricultural value chain integration.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 8,
    name: 'Amb. Chinyere Nwachukwu',
    role: 'Policy & Regulatory Advisor',
    category: 'Advisory',
    bio: 'Former regulatory head with deep insights into Nigerian agricultural policy and trade laws.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 9,
    name: 'Michael Chen',
    role: 'Agritech Innovation Advisor',
    category: 'Advisory',
    bio: 'Pioneer in precision agriculture and drone-based crop monitoring systems.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Adebayo Ogunlesi",
    role: "CEO, Heritage Mills Ltd",
    content: "The consistency and quality of yellow maize supplied by Glean Agro is unmatched in the region. They have become our primary partner for industrial raw materials.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Funke Akindele",
    role: "Out-grower Program Participant",
    content: "Joining the Glean Agro network changed my life. The technical support and guaranteed off-take gave my family the financial stability we needed.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: 3,
    name: "Chidi Okafor",
    role: "Retail Distribution Lead",
    content: "Glean's Premium Garri is our fastest-selling product. Customers love the cleanliness and authentic taste. The packaging is also world-class.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    rating: 4
  }
];

export const PARTNERS = [
  { name: 'Flour Mills of Nigeria', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg' },
  { name: 'Dangote Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg' },
  { name: 'Olam International', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg' },
  { name: 'Nestle Nigeria', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg' }
];

export const FAQ_DATA = [
  {
    question: "Are your products 100% organic?",
    answer: "While we specialize in sustainable and natural agronomic practices, we prioritize food safety and maximum yield for our industrial partners. Our premium Garri and retail products are processed with zero artificial additives."
  },
  {
    question: "How can I become an industrial off-taker?",
    answer: "Industrial partners can reach out via our contact form or directly through our corporate sales office. We offer flexible supply contracts for yellow maize, soybeans, and high-quality cassava starch."
  }
];
