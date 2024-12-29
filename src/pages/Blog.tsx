import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogHero from "@/components/BlogHero";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock categories - in a real app, these would come from your CMS or API
const categories = [
  "All",
  "Strategy",
  "Technology",
  "Marketing",
  "Analytics",
  "Success Stories"
];

// Extended mock blog posts with more content
const blogPosts = [
  {
    title: "Key Elements in Building a Successful Ecom Business",
    date: "2024-02-20",
    author: "Bixory Team",
    excerpt: "Discover the essential components that make up a thriving ecommerce business in today's digital landscape.",
    slug: "key-elements-ecom-success",
    coverImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    category: "Strategy",
    readingTime: "8 min read",
    featured: true
  },
  {
    title: "Leveraging Analytics for Growth",
    date: "2024-02-18",
    author: "Data Team",
    excerpt: "Learn how to use data analytics to drive business decisions and accelerate growth.",
    slug: "leveraging-analytics-growth",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Analytics",
    readingTime: "6 min read",
    featured: false
  },
  {
    title: "2024 E-commerce Technology Trends",
    date: "2024-02-15",
    author: "Tech Team",
    excerpt: "Stay ahead of the curve with these emerging e-commerce technology trends.",
    slug: "ecommerce-tech-trends-2024",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Technology",
    readingTime: "5 min read",
    featured: false
  },
  {
    title: "Key Elements in Building a Successful Ecom Business",
    date: "2024-02-20",
    author: "Bixory Team",
    excerpt: "Discover the essential components that make up a thriving ecommerce business in today's digital landscape.",
    slug: "key-elements-ecom-success",
    coverImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    category: "Strategy",
    readingTime: "8 min read",
    featured: false
  }
];

const Blog = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <BlogHero />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Featured Post */}
            {featuredPost && (
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Post</h2>
                <div className="grid md:grid-cols-2 gap-8 bg-accent/20 rounded-lg p-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <img 
                      src={featuredPost.coverImage} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <BlogCard {...featuredPost} />
                  </div>
                </div>
              </div>
            )}

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between animate-fade-in">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary/90 transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {currentPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;