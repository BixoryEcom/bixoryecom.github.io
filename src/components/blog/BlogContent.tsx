interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none container mx-auto px-4 py-8">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};