import { KPIChart } from './charts/KPIChart';
import { RealtimeChart } from './charts/RealtimeChart';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const processContent = (content: string) => {
    // First convert markdown to HTML
    const htmlContent = md.render(content);
    
    // Then replace chart placeholders
    return htmlContent
      .replace(
        '<iframe style="background: #FFFFFF;" width="100%" height="300" src="https://charts-demos.vercel.app/analytics-kpi-chart" frameBorder="0"></iframe>',
        '<div id="kpi-chart-placeholder"></div>'
      )
      .replace(
        '<iframe style="background: #FFFFFF;" width="100%" height="300" src="https://charts-demos.vercel.app/analytics-realtime-chart" frameBorder="0"></iframe>',
        '<div id="realtime-chart-placeholder"></div>'
      );
  };

  const renderContent = () => {
    const processedContent = processContent(content);
    const contentParts = processedContent.split(/<div id="(.*?)-placeholder"><\/div>/);
    
    return contentParts.map((part, index) => {
      if (index % 2 === 0) {
        return (
          <div 
            key={index} 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: part }} 
          />
        );
      } else {
        switch (part) {
          case 'kpi-chart':
            return <KPIChart key={index} />;
          case 'realtime-chart':
            return <RealtimeChart key={index} />;
          default:
            return null;
        }
      }
    });
  };

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none blog-content">
      {renderContent()}
    </div>
  );
};