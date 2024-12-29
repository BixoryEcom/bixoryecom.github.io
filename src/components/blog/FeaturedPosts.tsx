import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";
import { Link } from "react-router-dom";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="bg-purple-50/50 dark:bg-purple-950/20 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <time>{new Date(post.date).toLocaleDateString()}</time>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};