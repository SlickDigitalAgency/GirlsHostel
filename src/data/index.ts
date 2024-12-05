import {
  Wifi,
  Shield,
  Coffee,
  Book,
  Utensils,
  Wind,
  Star,
  Users,
  Bed,
  Sun,
  LucideProps,
} from 'lucide-react';

// Interfaces
interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
  category: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface CarouselImage {
  url: string;
  alt: string;
}

export interface Amenity {
  icon: React.ComponentType<LucideProps>;
  label: string;
}

interface Room {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  amenities: Amenity[];
}

interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

interface FAQ {
  question: string;
  answer: string;
}

interface Location {
  id: number;
  name: string;
  coordinates: [number, number];
  details: string;
}

interface PricingPlan {
  id: number;
  title: string;
  priceMonthly: number;
  priceWeekly: number;
  features: string[];
  details: string;
}

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  videoUrl: string;
}

interface NavbarItem {
  id: number;
  title: string;
  link: string;
  dropdown?: {
    title: string;
    link: string;
    dropdown?: {
      title: string;
      link: string;
    }[];
  }[];
}

// Data Exports
export const navbarData: NavbarItem[] = [
  { id: 1, title: 'Home', link: '/' },
  {
    id: 2,
    title: 'About',
    link: '/about',
    dropdown: [
     
      {
        title: 'Features & Amenities',
        link: '/features',
        dropdown: [
          { title: 'Wi-Fi & Internet', link: '#wifi' },
          { title: 'Security', link: '#security' },
          { title: 'Dining', link: '#dining' },
          { title: 'Air Conditioning', link: '#ac' },
        ],
      },
      {
        title: 'Safety & Security',
        link: '/safety',
        dropdown: [
          { title: 'CCTV & Surveillance', link: '#cctv' },
          { title: 'Emergency Protocols', link: '#emergency' },
          { title: 'Security Personnel', link: '#personnel' },
        ],
      },
      { title: 'Rooms', link: '/rooms' }, 
      { title: 'Terms & Conditions', link: '/terms' },
      { title: 'Privacy Policy', link: '/privacy' },
      { title: 'FAQ', link: '/faq' },
    ],
  },
  { id: 3, title: 'Gallery', link: '/gallery' },
  { id: 4, title: 'Pricing', link: '/pricing' },
  {
    id: 5,
    title: 'Blog',
    link: '/blog',
    dropdown: [
      { title: 'Hostel Life', link: '#life' },
      { title: 'Local Events', link: '#events' },
      { title: 'Study Tips', link: '#study-tips' },
    ],
  },
  { id: 6, title: 'Contact', link: '/contact' },
];

export const featuresData: Feature[] = [
  {
    icon: Wifi,
    title: 'Ultra-Fast WiFi',
    description: 'High-speed internet access throughout the entire hostel premises.',
    category: 'Connectivity',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Round-the-clock security with CCTV monitoring and trained personnel.',
    category: 'Safety',
  },
  {
    icon: Coffee,
    title: 'Common Areas',
    description: 'Cozy lounges and social spaces for relaxation and community.',
    category: 'Facilities',
  },
  {
    icon: Book,
    title: 'Study Rooms',
    description: 'Quiet, well-lit spaces designed for focused academic work.',
    category: 'Academic',
  },
  {
    icon: Utensils,
    title: 'Dining Services',
    description: 'Three nutritious meals daily prepared in our hygienic kitchen.',
    category: 'Dining',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for year-round comfort.',
    category: 'Comfort',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Regular social activities and cultural celebrations.',
    category: 'Community',
  },
  {
    icon: Bed,
    title: 'Quality Furnishing',
    description: 'Comfortable beds and modern furniture in all rooms.',
    category: 'Comfort',
  },
  {
    icon: Sun,
    title: 'Outdoor Space',
    description: 'Beautiful garden area for recreation and relaxation.',
    category: 'Facilities',
  },
];

export const timelineEventsData: TimelineEvent[] = [
  {
    year: '2015',
    title: 'Foundation',
    description: 'Established with a vision to provide safe accommodation for female students.',
  },
  {
    year: '2017',
    title: 'Expansion',
    description: 'Added new wing with modern facilities and study areas.',
  },
  {
    year: '2019',
    title: 'Excellence Award',
    description: 'Recognized as the best female hostel in Rawalpindi.',
  },
  {
    year: '2023',
    title: 'Modern Upgrade',
    description: 'Complete renovation with smart security systems and amenities.',
  },
];

export const carouselImagesData: CarouselImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    alt: 'Modern Study Area',
  },
  {
    url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
    alt: 'Comfortable Living Space',
  },
  {
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    alt: 'Cozy Common Room',
  },
];

export const roomsData: Room[] = [
  {
    id: 'single',
    title: 'Single Room',
    price: '15,000',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80',
    description: 'Perfect for students who prefer privacy and individual space.',
    features: ['Private Study Desk', 'Single Bed', 'Personal Wardrobe', 'Window View'],
    amenities: [
      { icon: Wifi, label: 'High-Speed WiFi' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Coffee, label: 'Tea Station' },
    ],
  },
  {
    id: 'double',
    title: 'Double Room',
    price: '12,000',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80',
    description: 'Shared room perfect for students who want a roommate experience.',
    features: ['2 Study Desks', 'Twin Beds', 'Shared Wardrobe', 'Balcony Access'],
    amenities: [
      { icon: Wifi, label: 'High-Speed WiFi' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Star, label: 'Daily Cleaning' },
    ],
  },
  {
    id: 'triple',
    title: 'Triple Room',
    price: '10,000',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80',
    description: 'Economical option with a vibrant community atmosphere.',
    features: ['3 Study Areas', 'Bunk Beds', 'Large Room', 'Common Lounge'],
    amenities: [
      { icon: Wifi, label: 'High-Speed WiFi' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Users, label: 'Social Space' },
    ],
  },
];

export const contactDetailsData: ContactDetails = {
  phone: '+1234567890',
  email: 'contact@hostel.com',
  address: '123 Hostel Street, City, Country',
  socialLinks: {
    facebook: 'https://facebook.com/hostel',
    instagram: 'https://instagram.com/hostel',
    twitter: 'https://twitter.com/hostel',
  },
};

export const faqsData: FAQ[] = [
  {
    question: 'What is the check-in time?',
    answer: 'Check-in time is from 2 PM onwards.',
  },
  {
    question: 'Is breakfast included?',
    answer: 'Yes, a complimentary breakfast is provided.',
  },
  {
    question: 'Do you allow pets?',
    answer: 'Pets are allowed in designated areas with prior approval.',
  },
  {
    question: 'Can I cancel my reservation?',
    answer: 'Cancellations can be made up to 24 hours before check-in without a fee.',
  },
];

export const GalleryimagesData = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80',
    caption: 'A cozy room in the hostel',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
    caption: 'Spacious common area',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    caption: "The hostel's beautiful garden",
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    caption: 'Dining area with a view',
  },
];

export const InteractiveMaplocationsData: Location[] = [
  {
    id: 1,
    name: 'Famous Park',
    coordinates: [51.505, -0.09],
    details: 'A beautiful park with green spaces and walking paths.',
  },
  {
    id: 2,
    name: 'Historic Museum',
    coordinates: [51.515, -0.1],
    details: 'A museum showcasing the local history and culture.',
  },
  {
    id: 3,
    name: 'Shopping Mall',
    coordinates: [51.525, -0.11],
    details: 'A modern shopping center with a variety of stores and restaurants.',
  },
];

export const pricingPlansData: PricingPlan[] = [
  {
    id: 1,
    title: "Basic Plan",
    priceMonthly: 299,
    priceWeekly: 89,
    features: [
      "Shared Room Accommodation",
      "Basic Amenities",
      "Communal Kitchen Access",
      "Weekly Housekeeping",
      "High-Speed WiFi",
      "24/7 Security"
    ],
    details: "Perfect for students looking for affordable accommodation"
  },
  {
    id: 2,
    title: "Premium Plan",
    priceMonthly: 499,
    priceWeekly: 139,
    features: [
      "Private Room Accommodation",
      "Premium Amenities",
      "Private Kitchen Access",
      "Daily Housekeeping",
      "High-Speed WiFi",
      "24/7 Security",
      "Study Room Access",
      "Laundry Service"
    ],
    details: "Ideal for students who want extra comfort and privacy"
  },
  {
    id: 3,
    title: "Luxury Plan",
    priceMonthly: 699,
    priceWeekly: 189,
    features: [
      "Deluxe Private Room",
      "Premium Amenities",
      "Private Kitchen & Dining",
      "Daily Housekeeping",
      "Priority Maintenance",
      "24/7 Security",
      "Private Study Room",
      "Laundry Service",
      "Meal Plan Included"
    ],
    details: "The ultimate comfort for discerning students"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    review: 'The hostel is amazing! The staff is so friendly, and the amenities are top-notch.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    name: 'John Smith',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    review: 'I feel safe and comfortable here. The location is perfect, and the people are welcoming.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    name: 'Emily Clark',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    review: 'A great place to live while studying. The environment is supportive, and the resources are excellent.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];