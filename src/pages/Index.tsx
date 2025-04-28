
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, TruckIcon, Shield, Leaf, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />

      <FeaturedProducts />

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-white to-eco-purple-light/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-eco-green-light text-eco-green-dark rounded-full text-sm font-medium mb-4 animate-fade-in">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Benefits of Eco-Friendly Ganesha
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our paper Ganesha idols combine traditional practices with environmental consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
              style={{animationDelay: "0.1s"}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-eco-purple-light/0 via-eco-purple-light/0 to-eco-purple-light/30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-eco-purple-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-eco-purple-DEFAULT transition-colors">
                  <Leaf className="text-eco-purple-DEFAULT group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm">
                  Made from 100% recycled paper and natural colors that are safe for the environment.
                </p>
              </div>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
              style={{animationDelay: "0.2s"}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-eco-green-light/0 via-eco-green-light/0 to-eco-green-light/30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-eco-green-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-eco-green-DEFAULT transition-colors">
                  <Shield className="text-eco-green-DEFAULT group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Water Safe</h3>
                <p className="text-gray-600 text-sm">
                  Dissolves completely in water without releasing harmful chemicals or pollutants.
                </p>
              </div>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
              style={{animationDelay: "0.3s"}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-eco-orange-light/0 via-eco-orange-light/0 to-eco-orange-light/30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-eco-orange-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-eco-orange-DEFAULT transition-colors">
                  <TruckIcon className="text-eco-orange-DEFAULT group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Quick shipping to ensure your Ganesha idol arrives in perfect condition before the festival.
                </p>
              </div>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
              style={{animationDelay: "0.4s"}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-eco-earth-light/0 via-eco-earth-light/0 to-eco-earth-light/30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-eco-earth-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-eco-earth-DEFAULT transition-colors">
                  <CalendarDays className="text-eco-earth-DEFAULT group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Festival Ready</h3>
                <p className="text-gray-600 text-sm">
                  Beautifully crafted idols ready for Ganesh Chaturthi celebrations and rituals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <TestimonialSection />

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-eco-purple-dark to-eco-purple-DEFAULT"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-repeat"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
            Ready to Celebrate Eco-Consciously?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Choose from our collection of beautifully handcrafted eco-friendly Ganesha idols and join the movement for sustainable celebrations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-white text-eco-purple-DEFAULT hover:bg-eco-purple-light group"
              >
                Shop Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-eco-purple-DEFAULT"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-white/20 rounded-full"></div>
        </div>
      </section>
    </main>
  );
};

export default Index;
