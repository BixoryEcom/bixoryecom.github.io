export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  category: string;
  readingTime: string;
  featured?: boolean;
}