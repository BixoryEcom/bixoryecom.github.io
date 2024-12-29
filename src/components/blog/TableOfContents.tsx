import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TableOfContentsProps {
  content: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse content for headings using regex
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    const items: HeadingItem[] = Array.from(headingElements).map((heading, index) => ({
      id: heading.id || `heading-${index}`,
      text: heading.textContent || '',
      level: parseInt(heading.tagName[1])
    }));
    
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="hidden lg:block sticky top-24 w-64 ml-8 space-y-2">
      <div className="flex items-center gap-2 text-lg font-semibold mb-4">
        <List className="w-5 h-5" />
        Table of Contents
      </div>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm py-1 pl-${(heading.level - 1) * 4} hover:text-primary transition-colors ${
              activeId === heading.id ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};