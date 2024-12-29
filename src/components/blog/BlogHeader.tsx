import React from 'react';
import { CalendarDays, Clock, Eye } from 'lucide-react';

interface BlogHeaderProps {
  title: string;
  date: string;
  readingTime?: string;
  views?: number;
  coverImage?: string;
}

export const BlogHeader = ({ title, date, readingTime, views, coverImage }: BlogHeaderProps) => {
  return (
    <div className="relative overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${coverImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto">
          {title}
        </h1>
        
        <div className="flex items-center justify-center gap-6 text-white/90 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <span>{new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          
          {readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
          )}
          
          {views && (
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()} views</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};