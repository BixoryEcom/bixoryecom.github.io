import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  author: string;
}

const BlogCard = ({ title, date, excerpt, slug, coverImage, author }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {format(new Date(date), "MMMM d, yyyy")}
            </p>
            <p className="text-sm text-muted-foreground">{author}</p>
          </div>
          <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;