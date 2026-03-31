export type Page = 'home' | 'about' | 'services' | 'team' | 'insights' | 'contact';

export interface Service {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  position: string;
  expertise: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Insight {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
}

export interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}