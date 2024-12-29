const BlogHero = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] bg-gradient-to-br from-purple-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />

      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-purple-900/30 to-gray-900/30 dark:from-gray-900/50 dark:to-gray-900/50" />

      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-200 dark:to-indigo-200 text-transparent bg-clip-text animate-fade-in">
            Insights & Resources
          </h1>
          <p className="text-xl md:text-2xl text-white dark:text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Expert perspectives on eCommerce trends, strategies, and innovations to help grow your business
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;