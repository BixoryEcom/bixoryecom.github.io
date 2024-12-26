import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const stores = [
  {
    name: "BIXTORE Arts & Living",
    description: "Premium Lifestyle Goods",
    image: "/lovable-uploads/8554aa2d-e64a-438f-8bcb-072be04cda29.png",
    logo: "/lovable-uploads/17644bb9-3a27-4dec-815a-a688892dbb11.png",
    link: "https://bixports.com"
  },
  {
    name: "The Big Sports",
    description: "Affordable Sporting Gears",
    image: "/lovable-uploads/f6dfee09-e03e-41d2-9a50-6f5fd5547289.png",
    logo: "/lovable-uploads/c246f473-4905-48d0-b2ac-7d64d13d3ca8.png",
    link: "https://bixtore.com"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio-section" className="py-24 bg-gradient-to-b from-purple-50/50 via-background to-white/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 
          md:text-5xl">
          Discover Our Brands
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stores.map((store, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-purple-100/50 hover:border-purple-200 
                bg-white/80 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 
                  transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                  {store.logo && (
                    <img
                      src={store.logo}
                      alt={`${store.name} Logo`}
                      className="w-20 h-auto mb-4 drop-shadow-lg"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-lg">{store.name}</h3>
                  <p className="text-white/90 mb-6 text-center drop-shadow-md">{store.description}</p>
                  <a 
                    href={store.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-purple-600 rounded-full 
                      font-semibold transition-all duration-300 hover:gap-3 hover:px-7 group/link"
                  >
                    Visit Store
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:transform 
                      group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
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