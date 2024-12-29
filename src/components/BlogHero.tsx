const BlogHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-transparent bg-clip-text animate-fade-in">
          Insights & Resources
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-delayed">
          Expert perspectives on eCommerce trends, strategies, and innovations to help grow your business
        </p>
      </div>
    </div>
  );
};

export default BlogHero;