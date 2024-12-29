import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/blog";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>("");

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
    <div>
      <BlogHeader
        title={post.title}
        date={post.date}
        readingTime={post.readingTime || "5 min read"}
        views={post.views || 0}
        coverImage={post.coverImage}
      />
      <BlogContent content={content} />
    </div>
  );
};

export default BlogPostPage;