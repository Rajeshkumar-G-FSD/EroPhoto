export interface Experience {
  id: string;
  location: string;
  title: string;
  image: string;
  price: string;
  description: string;
  fullDescription: string;
  highlights: string[];
}

export type Page = "HOME" | "EXPERIENCES" | "DESTINATIONS" | "WEDDINGS" | "OFFERS" | "CONTACT";
