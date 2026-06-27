export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  benefits: string[];
  process: string[];
  image: string;
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  projectImage?: string;
  projectImages?: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
