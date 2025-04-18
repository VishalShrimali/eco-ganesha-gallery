
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Droplets } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-eco-earth-light/20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-eco-green-light to-eco-earth-light rounded-lg blur-xl opacity-40"></div>
              <img
                src="/placeholder.svg"
                alt="Eco-friendly Ganesha making process"
                className="rounded-lg shadow-xl object-cover w-full max-h-[500px] relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-eco-purple-DEFAULT text-white p-6 rounded-lg shadow-xl transform hover:rotate-3 transition-transform z-20">
                <p className="font-heading text-lg font-bold">100% Eco-friendly</p>
                <p className="text-sm">Made from recycled paper</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1 bg-eco-earth-light text-eco-earth-dark rounded-full text-sm font-medium mb-4 animate-fade-in">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Choose <span className="text-eco-green-DEFAULT">Eco-friendly</span> Ganesha Idols?
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional clay and plaster of Paris Ganesha idols contain toxic materials that pollute our water bodies. Our eco-friendly paper Ganesha idols offer a sustainable alternative without compromising on beauty or religious significance.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all group">
                <div className="bg-eco-green-light p-3 rounded-full group-hover:bg-eco-green-DEFAULT group-hover:text-white transition-colors">
                  <Leaf className="text-eco-green-DEFAULT group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Environmentally Conscious</h3>
                  <p className="text-gray-600 text-sm">
                    Made from recycled paper and natural colors, our idols dissolve safely in water without releasing harmful chemicals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all group">
                <div className="bg-eco-green-light p-3 rounded-full group-hover:bg-eco-green-DEFAULT group-hover:text-white transition-colors">
                  <Recycle className="text-eco-green-DEFAULT group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Sustainable Materials</h3>
                  <p className="text-gray-600 text-sm">
                    We use recycled paper, natural adhesives, and vegetable dyes to create beautiful yet environmentally responsible idols.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all group">
                <div className="bg-eco-green-light p-3 rounded-full group-hover:bg-eco-green-DEFAULT group-hover:text-white transition-colors">
                  <Droplets className="text-eco-green-DEFAULT group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Water-Friendly Immersion</h3>
                  <p className="text-gray-600 text-sm">
                    Our idols dissolve easily during immersion, returning to nature without polluting water bodies.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button className="btn-primary">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
