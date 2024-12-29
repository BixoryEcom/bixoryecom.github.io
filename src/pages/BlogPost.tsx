import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // For now, let's use the mock data since we're having issues with markdown imports
        const mockPost: BlogPost = {
          title: "Leveraging Analytics for Growth",
          date: "2024-02-18",
          author: "Data Team",
          excerpt: "Learn how to use data analytics to drive business decisions and accelerate growth in your ecommerce venture.",
          slug: "leveraging-analytics-growth",
          coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
          category: "Analytics",
          readingTime: "6 min read",
          views: 1234
        };

        setPost(mockPost);
        setContent(`
          <h1>Leveraging Analytics for Growth</h1>
          <p>Learn how to use data analytics to drive business decisions and accelerate growth in your ecommerce venture. 
          Discover key metrics, implementation strategies, and best practices.</p>
          <h2>Key Metrics to Track</h2>
          <ul>
            <li>Conversion Rate</li>
            <li>Customer Lifetime Value</li>
            <li>Average Order Value</li>
            <li>Cart Abandonment Rate</li>
          </ul>
        `);
      } catch (error) {
        console.error("Error loading blog post:", error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <BlogHeader
        title={post.title}
        date={post.date}
        readingTime={post.readingTime || "5 min read"}
        views={post.views || 0}
        coverImage={post.coverImage}
      />
      <BlogContent content={content} />
      <Footer />
    </div>
  );
};

export default BlogPostPage;