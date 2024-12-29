import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, MessageSquare, Eye } from "lucide-react";
import { toast } from "sonner";

// This would typically come from an API or CMS
const blogPosts = {
  "key-elements-ecom-success": {
    title: "Key Elements in Building a Successful Ecom Business",
    date: "2024-01-18",
    author: "Bixory Team",
    readingTime: "8 min read",
    views: 1205,
    content: `
<div class="blog-content">
  <h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Key Elements in Building a Successful Ecom Business</h1>

  <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
    In today's rapidly evolving digital marketplace, building a successful ecommerce business requires a careful blend of strategy, technology, and customer-centric thinking. Let's explore the key elements that can make or break your online retail venture.
  </p>

  <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 mt-12">1. User-Centric Design</h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Your ecommerce platform should prioritize user experience above all else. This means:</p>
  <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
    <li>Intuitive navigation that guides users naturally through your site</li>
    <li>Mobile-first design ensuring seamless experiences across all devices</li>
    <li>Fast loading times to minimize bounce rates</li>
    <li>Clear product presentations with high-quality images and detailed descriptions</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 mt-12">2. Robust Technology Stack</h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Choose technology that scales with your business:</p>
  <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
    <li>Reliable hosting infrastructure with excellent uptime</li>
    <li>Secure payment processing systems protecting customer data</li>
    <li>Comprehensive inventory management systems</li>
    <li>Advanced analytics tools for data-driven decisions</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 mt-12">3. Marketing Strategy</h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Develop a comprehensive marketing approach that includes:</p>
  <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
    <li>SEO optimization for better organic reach</li>
    <li>Strategic social media presence across relevant platforms</li>
    <li>Targeted email marketing campaigns</li>
    <li>Engaging content marketing that adds value</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 mt-12">4. Customer Service</h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Excellence in customer service builds loyalty through:</p>
  <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
    <li>Quick response times to customer inquiries</li>
    <li>Multiple contact channels for accessibility</li>
    <li>Clear, customer-friendly return policies</li>
    <li>Personal touch in all communications</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 mt-12">5. Data-Driven Decision Making</h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Use analytics to guide your business by:</p>
  <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
    <li>Tracking key performance metrics</li>
    <li>Monitoring customer behavior patterns</li>
    <li>Optimizing conversion rates continuously</li>
    <li>Adjusting strategies based on data insights</li>
  </ul>

  <div class="mt-12 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg border border-purple-100 dark:border-gray-700">
    <p class="text-gray-700 dark:text-gray-300 italic">
      Remember, success in ecommerce is a journey, not a destination. Keep learning, adapting, and improving your approach based on customer feedback and market trends.
    </p>
  </div>
</div>
    `,
    coverImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={false} />
      
      <main className="flex-grow">
        {/* Hero Section with Cover Image and Title */}
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-lg opacity-90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        </div>

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
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Author Info */}
            <div className="mt-16 p-6 border rounded-lg bg-muted/30">
              <h3 className="text-lg font-semibold mb-2">About the Author</h3>
              <p className="text-muted-foreground">{post.author}</p>
            </div>

            {/* Back to Blog List Button */}
            <div className="mt-16 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
              >
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog List
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;