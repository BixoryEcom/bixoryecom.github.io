import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

// This would typically come from an API or CMS
const blogPosts = {
  "key-elements-ecom-success": {
    title: "Key Elements in Building a Successful Ecom Business",
    date: "2024-02-20",
    author: "Bixory Team",
    content: `
# Key Elements in Building a Successful Ecom Business

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

Remember, success in ecommerce is a journey, not a destination. Keep learning, adapting, and improving your approach based on customer feedback and market trends.
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
            <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-lg">
              <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            
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