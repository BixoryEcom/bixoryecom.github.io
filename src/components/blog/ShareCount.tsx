import { Share2 } from "lucide-react";

interface ShareCountProps {
  count: number;
}

export const ShareCount = ({ count }: ShareCountProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Share2 className="w-4 h-4" />
      <span>{count} shares</span>
    </div>
  );
};