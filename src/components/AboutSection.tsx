import { Building, Globe, ShoppingBag } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            At Bixory, we're more than just an eCommerce company. We're your partners in digital success,
            combining expertise in development, strategy, and innovation to help brands thrive in the
            digital marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="h-8 w-8" />,
              title: "Global Reach",
              description: "Connect with customers worldwide through optimized eCommerce solutions"
            },
            {
              icon: <ShoppingBag className="h-8 w-8" />,
              title: "Expert Solutions",
              description: "Tailored eCommerce strategies backed by years of industry experience"
            },
            {
              icon: <Building className="h-8 w-8" />,
              title: "Growth Platform",
              description: "Scale your business with our comprehensive suite of tools and services"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;