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
        const response = await import(`../blogs/${slug}.md`);
        const { attributes, html } = response.default;
        setPost({
          title: attributes.title,
          date: attributes.date,
          author: attributes.author,
          excerpt: attributes.excerpt,
          coverImage: attributes.coverImage,
          slug: slug || "",
          readingTime: "5 min read",
          views: 1234,
          category: "Strategy"
        });
        setContent(html);
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
        readingTime={post.readingTime}
        views={post.views}
        coverImage={post.coverImage}
      />
      <div className="blog-content">
        <BlogContent content={content} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;