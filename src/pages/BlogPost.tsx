import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { toast } from "sonner";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleNavigation } from "@/components/blog/ArticleNavigation";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BackToTop } from "@/components/blog/BackToTop";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";

// Import the blog post content
const post = {
  title: "Key Elements in Building a Successful Ecom Business",
  date: "2024-02-20",
  author: "Bixory Team",
  readingTime: "8 min read",
  views: 1205,
  content: `# Key Elements in Building a Successful Ecom Business

In today's rapidly evolving digital marketplace, building a successful ecommerce business requires a careful blend of strategy, technology, and customer-centric thinking. Let's explore the key elements that can make or break your online retail venture.

## 1. User-Centric Design

Your ecommerce platform should prioritize user experience above all else. This means:
- Intuitive navigation
- Mobile-first design
- Fast loading times
- Clear product presentations

## 2. Robust Technology Stack

Choose technology that scales with your business:
- Reliable hosting
- Secure payment processing
- Inventory management systems
- Analytics tools

## 3. Marketing Strategy

Develop a comprehensive marketing approach:
- SEO optimization
- Social media presence
- Email marketing campaigns
- Content marketing

## 4. Customer Service

Excellence in customer service builds loyalty:
- Quick response times
- Multiple contact channels
- Clear return policies
- Personal touch in communications

## 5. Data-Driven Decision Making

Use analytics to guide your business:
- Track key metrics
- Monitor customer behavior
- Optimize conversion rates
- Adjust strategies based on data

Remember, success in ecommerce is a journey, not a destination. Keep learning, adapting, and improving your approach based on customer feedback and market trends.`,
  coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
};

const BlogPost = () => {
  const { slug } = useParams();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post?.title,
        text: "Check out this interesting article!",
        url: window.location.href,
      });
    } catch (error) {
      toast.info("Copy link to clipboard instead", {
        description: window.location.href,
        action: {
          label: "Copy",
          onClick: () => navigator.clipboard.writeText(window.location.href)
        },
      });
    }
  };

  const handleBookmark = () => {
    toast.success("Article bookmarked!", {
      description: "You can find it in your saved articles."
    });
  };

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Header isScrolled={false} />
      
      <BlogHeader {...post} />

      {/* Article Actions */}
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={handleBookmark}
              >
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <BlogContent content={post.content} />
          
          {/* Author Info */}
          <div className="mt-16 p-6 border rounded-lg bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">About the Author</h3>
            <p className="text-muted-foreground">{post.author}</p>
          </div>

          {/* Navigation */}
          <ArticleNavigation
            previousPost={{
              slug: "leveraging-analytics-growth",
              title: "Leveraging Analytics for Growth"
            }}
            nextPost={{
              slug: "ecommerce-tech-trends-2024",
              title: "2024 E-commerce Technology Trends"
            }}
          />

          {/* Related Posts */}
          <RelatedPosts
            posts={[
              {
                slug: "leveraging-analytics-growth",
                title: "Leveraging Analytics for Growth",
                excerpt: "Learn how to use data analytics to drive business decisions and accelerate growth.",
                category: "Analytics"
              },
              {
                slug: "ecommerce-tech-trends-2024",
                title: "2024 E-commerce Technology Trends",
                excerpt: "Stay ahead of the curve with these emerging e-commerce technology trends.",
                category: "Technology"
              }
            ]}
          />
        </div>
      </article>
      
      <BackToTop />
      <Footer />
    </div>
  );
};

export default BlogPost;