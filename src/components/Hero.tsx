
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-eco-green-light via-white to-eco-purple-light py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <span className="inline-block px-4 py-1 bg-eco-purple-light text-eco-purple-dark rounded-full text-sm font-medium mb-6 animate-fade-in">
              Eco-Friendly Celebrations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-eco-green-dark leading-tight animate-fade-in">
              Celebrate <span className="text-eco-purple-DEFAULT">Sustainably</span> with Eco-Friendly Ganesha Idols
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our handcrafted paper Ganesha idols combine tradition with environmental consciousness, bringing blessings while protecting our planet.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/products">
                <Button className="btn-primary group">
                  Shop Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="btn-outline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center p-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="font-bold text-eco-orange-DEFAULT text-2xl">100%</h4>
                <p className="text-sm text-gray-600">Eco-Friendly</p>
              </div>
              <div className="text-center p-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="font-bold text-eco-orange-DEFAULT text-2xl">4+</h4>
                <p className="text-sm text-gray-600">Sizes Available</p>
              </div>
              <div className="text-center p-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="font-bold text-eco-orange-DEFAULT text-2xl">5000+</h4>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-eco-purple-light to-eco-green-light rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-eco-green-light via-white to-eco-purple-light rounded-full flex items-center justify-center p-8 shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Eco-friendly Ganesha Idol" 
                  className="max-h-[400px] object-contain drop-shadow-2xl transform hover:rotate-2 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
