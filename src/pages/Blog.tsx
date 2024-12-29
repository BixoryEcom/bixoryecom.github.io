import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import { FilteredPosts } from "@/components/blog/FilteredPosts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BlogPost } from "@/types/blog";

const categories = [
  "All",
  "Strategy",
  "Technology",
  "Marketing",
  "Analytics",
  "Success Stories"
];

const blogPosts: BlogPost[] = [
  {
    title: "Key Elements in Building a Successful Ecom Business",
    date: "2024-01-18",
    author: "Bixory Team",
    excerpt: "Discover the essential components that make up a thriving ecommerce business in today's digital landscape.",
    slug: "key-elements-ecom-success",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "Strategy",
    readingTime: "8 min read",
    featured: true
  },
  {
    title: "Leveraging Analytics for Growth",
    date: "2024-02-18",
    author: "Data Team",
    excerpt: "Learn how to use data analytics to drive business decisions and accelerate growth in your ecommerce venture. Discover key metrics, implementation strategies, and best practices.",
    slug: "leveraging-analytics-growth",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Analytics",
    readingTime: "6 min read",
    featured: true
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
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredPosts = blogPosts.filter(post => post.featured);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <BlogHero />
        
        <div className="space-y-0">
          <FeaturedPosts posts={featuredPosts} />
          
          <FilteredPosts
            posts={currentPosts}
            categories={categories}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchQuery}
          />

          {totalPages > 1 && (
            <div className="py-8 bg-gray-50 dark:bg-gray-900/50">
              <Pagination className="justify-center">
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
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
