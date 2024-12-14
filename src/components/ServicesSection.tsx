import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Strategy Consulting",
    description: "Expert guidance to optimize your eCommerce operations"
  },
  {
    title: "Growth Marketing",
    description: "Data-driven strategies to expand your market reach"
  },
  {
    title: "Technology Solutions",
    description: "Cutting-edge tools for seamless online retail"
  },
  {
    title: "Analytics & Insights",
    description: "Deep understanding of your business performance"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How We Help Your Business Thrive</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;