import { Building, Globe, ShoppingBag } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Who We Are
          </h2>
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
              className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 p-3 bg-purple-50 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-gray-600 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;