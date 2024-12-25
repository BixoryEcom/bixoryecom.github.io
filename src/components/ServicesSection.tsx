import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Rocket, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Strategy Consulting",
    description: "Expert guidance to optimize your eCommerce operations",
    icon: <Brain className="h-6 w-6" />
  },
  {
    title: "Growth Marketing",
    description: "Data-driven strategies to expand your market reach",
    icon: <Rocket className="h-6 w-6" />
  },
  {
    title: "Technology Solutions",
    description: "Cutting-edge tools for seamless online retail",
    icon: <Settings className="h-6 w-6" />
  },
  {
    title: "Analytics & Insights",
    description: "Deep understanding of your business performance",
    icon: <BarChart3 className="h-6 w-6" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-white/90 via-purple-50/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          How We Help Your Business Thrive
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-200 bg-white/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  {/* Icon container */}
                  <div className="p-3 bg-purple-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-600">{service.icon}</div>
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700 transition-colors flex items-center">
                      {service.title}
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground group-hover:text-gray-600 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;