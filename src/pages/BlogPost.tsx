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
          <div className="max-w-3xl mx-auto">
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