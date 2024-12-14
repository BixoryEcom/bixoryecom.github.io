import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stores = [
  {
    name: "LuxeWatch Boutique",
    description: "Premium timepiece marketplace",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80"
  },
  {
    name: "EcoHome Essentials",
    description: "Sustainable home goods",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Discover Our Brands</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stores.map((store, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{store.name}</h3>
                  <p className="text-white/90 mb-4">{store.description}</p>
                  <Button variant="secondary" size="lg">
                    Visit Store
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;