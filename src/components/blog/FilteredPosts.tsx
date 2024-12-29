import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/types/blog";
import { Search } from "lucide-react";
import BlogCard from "@/components/BlogCard";

interface FilteredPostsProps {
  posts: BlogPost[];
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
}

export const FilteredPosts = ({
  posts,
  categories,
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: FilteredPostsProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};