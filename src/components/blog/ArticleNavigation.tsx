import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleNavigationProps {
  previousPost?: {
    slug: string;
    title: string;
  };
  nextPost?: {
    slug: string;
    title: string;
  };
}

export const ArticleNavigation = ({ previousPost, nextPost }: ArticleNavigationProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 border-t pt-8">
      {previousPost ? (
        <Link
          to={`/blog/${previousPost.slug}`}
          className="group flex flex-col items-start space-y-2 p-4 rounded-lg hover:bg-accent transition-colors"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="w-4 h-4" />
            Previous Article
          </div>
          <span className="font-medium group-hover:text-primary transition-colors">
            {previousPost.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      
      {nextPost ? (
        <Link
          to={`/blog/${nextPost.slug}`}
          className="group flex flex-col items-end space-y-2 p-4 rounded-lg hover:bg-accent transition-colors"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Next Article
            <ArrowRight className="w-4 h-4" />
          </div>
          <span className="font-medium text-right group-hover:text-primary transition-colors">
            {nextPost.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};