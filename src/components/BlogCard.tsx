import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  author: string;
  category?: string;
  readingTime?: string;
}

const BlogCard = ({ 
  title, 
  date, 
  excerpt, 
  slug, 
  coverImage, 
  author,
  category = "eCommerce",
  readingTime = "5 min read"
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100">
              {category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <time className="text-sm text-muted-foreground">
              {format(new Date(date), "MMM d, yyyy")}
            </time>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;