
export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface AIResponse {
  ideas: PostIdea[];
  strategy: string;
}

export interface PostIdea {
  hook: string;
  caption: string;
  hashtags: string[];
  platform: 'Instagram' | 'TikTok' | 'X' | 'LinkedIn';
}

export enum PackageType {
  VIRAL = 'Viral',
  BUSINESS = 'Business'
}
