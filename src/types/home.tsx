export interface SchoolProgram {
  id: string;
  title: string;
  description: string;
  image?: string;
  level: 'preschool' | 'elementary' | 'middle' | 'high';
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  publishDate: string;
  category: 'announcement' | 'news' | 'event';
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  fax?: string;
}

export interface SocialMedia {
  facebook?: string;
  youtube?: string;
  instagram?: string;
  twitter?: string;
  googlePlus?: string;
}

export interface SchoolInfo {
  name: string;
  logo: string;
  contact: ContactInfo;
  socialMedia: SocialMedia;
  description: string;
}