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
    // Parse content for h1 and h2 tags with their IDs
    const headingRegex = /<h([12])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h\1>/g;
    const matches = Array.from(content.matchAll(headingRegex));
    
    const items: HeadingItem[] = matches.map((match) => ({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].trim()
    }));

    console.log("Found headings:", items); // Debug log
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

  if (headings.length === 0) {
    console.log("No headings found in content"); // Debug log
    return null;
  }

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
            className={`
              block text-sm py-1
              ${heading.level === 1 ? 'pl-0' : 'pl-4'}
              hover:text-primary transition-colors
              ${activeId === heading.id ? 'text-primary font-medium' : 'text-muted-foreground'}
            `}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                const yOffset = -100;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};