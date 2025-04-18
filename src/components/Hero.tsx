
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-eco-green-light to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-eco-green-dark leading-tight animate-fade-in">
              Celebrate <span className="text-eco-purple-DEFAULT">Sustainably</span> with Eco-Friendly Ganesha Idols
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Our handcrafted paper Ganesha idols combine tradition with environmental consciousness, bringing blessings while protecting our planet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="btn-primary">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="btn-outline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-eco-orange-DEFAULT text-2xl">100%</h4>
                <p className="text-sm text-gray-600">Eco-Friendly</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-eco-orange-DEFAULT text-2xl">4+</h4>
                <p className="text-sm text-gray-600">Sizes Available</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-eco-orange-DEFAULT text-2xl">5000+</h4>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 animate-float">
            <div className="aspect-square bg-eco-purple-light rounded-full flex items-center justify-center p-8">
              <img 
                src="/placeholder.svg" 
                alt="Eco-friendly Ganesha Idol" 
                className="max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
