import { Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <div className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Link className="w-5 h-5" />
        Related Articles
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <RouterLink
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group p-4 rounded-lg border hover:border-primary transition-colors"
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
            <span className="mt-2 inline-block text-xs text-muted-foreground">
              {post.category}
            </span>
          </RouterLink>
        ))}
      </div>
    </div>
  );
};