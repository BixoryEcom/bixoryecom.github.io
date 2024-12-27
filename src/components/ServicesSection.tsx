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
    <section id="services-section" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 via-white/80 to-purple-50/50"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          How We Help Your Business Thrive
        </h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-purple-100 hover:border-purple-200 
                bg-white/50 backdrop-blur-sm overflow-hidden transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-50 rounded-lg group-hover:scale-110 transition-transform duration-500 
                    group-hover:bg-purple-100">
                    <div className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300 
                      flex items-center gap-2">
                      {service.title}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-500" />
                    </h3>
                    <p className="text-muted-foreground group-hover:text-gray-600 transition-colors duration-300">
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