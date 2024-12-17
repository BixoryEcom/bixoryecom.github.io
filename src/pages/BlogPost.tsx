import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

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
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </p>
            <p className="text-muted-foreground">{post.author}</p>
          </div>
          
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;