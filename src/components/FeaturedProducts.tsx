
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const [products] = useState(getFeaturedProducts());
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-eco-purple-light via-white to-eco-green-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-eco-orange-light text-eco-orange-dark rounded-full text-sm font-medium mb-4 animate-fade-in">
            Handcrafted Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-fade-in">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Discover our most popular eco-friendly Ganesha idols, handcrafted with love and care for both tradition and environment.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-eco-purple-light transition-colors -ml-4 lg:-ml-6"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-eco-purple-DEFAULT" />
          </button>
          
          <div 
            ref={sliderRef} 
            className="flex overflow-x-auto gap-6 pb-8 px-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  size={product.size}
                  image={product.image}
                />
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-eco-purple-light transition-colors -mr-4 lg:-mr-6"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-eco-purple-DEFAULT" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button 
              variant="outline" 
              className="btn-outline relative overflow-hidden group"
            >
              <span className="relative z-10">View All Products</span>
              <span className="absolute inset-0 bg-eco-green-DEFAULT transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
