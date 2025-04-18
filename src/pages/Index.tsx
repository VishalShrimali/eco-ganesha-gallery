
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, TruckIcon, Shield, Leaf } from "lucide-react";

const Index = () => {
  return (
    <main>
      <Hero />

      <FeaturedProducts />

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Benefits of Eco-Friendly Ganesha
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our paper Ganesha idols combine traditional practices with environmental consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-eco-purple-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-eco-purple-DEFAULT" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Made from 100% recycled paper and natural colors that are safe for the environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-eco-green-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-eco-green-DEFAULT" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Water Safe</h3>
              <p className="text-gray-600 text-sm">
                Dissolves completely in water without releasing harmful chemicals or pollutants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-eco-orange-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="text-eco-orange-DEFAULT" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick shipping to ensure your Ganesha idol arrives in perfect condition before the festival.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-eco-earth-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="text-eco-earth-DEFAULT" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Festival Ready</h3>
              <p className="text-gray-600 text-sm">
                Beautifully crafted idols ready for Ganesh Chaturthi celebrations and rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <TestimonialSection />

      {/* CTA Section */}
      <section className="section-padding bg-eco-purple-DEFAULT text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Celebrate Eco-Consciously?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Choose from our collection of beautifully handcrafted eco-friendly Ganesha idols and join the movement for sustainable celebrations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-white text-eco-purple-DEFAULT hover:bg-eco-purple-light"
              >
                Shop Now
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
        </div>
      </section>
    </main>
  );
};

export default Index;
