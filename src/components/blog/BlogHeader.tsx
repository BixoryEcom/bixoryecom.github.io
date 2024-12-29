import { Calendar, Clock, Eye } from "lucide-react";
import { format } from "date-fns";
import { ShareCount } from "./ShareCount";

interface BlogHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  views: number;
  coverImage: string;
}

export const BlogHeader = ({ title, date, readingTime, views, coverImage }: BlogHeaderProps) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mb-6">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-lg opacity-90">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{format(new Date(date), "MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{readingTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span>{views.toLocaleString()} views</span>
          </div>
          <ShareCount count={42} />
        </div>
      </div>
    </div>
  );
};