import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/blog";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await import(`../blogs/${slug}.md`);
        const { attributes } = response.default;
        setPost({
          title: attributes.title,
          date: attributes.date,
          author: attributes.author,
          excerpt: attributes.excerpt,
          coverImage: attributes.coverImage,
          slug: slug || "",
          readingTime: "5 min read", // This could be calculated based on content length
          views: 1234, // This could be fetched from analytics
          category: "Strategy" // This could be from frontmatter
        });
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
        readingTime={post.readingTime}
        views={post.views}
        coverImage={post.coverImage}
      />
      <BlogContent slug={slug || ""} />
    </div>
  );
};

export default BlogPostPage;