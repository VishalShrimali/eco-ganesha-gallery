
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Droplets } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Eco-friendly Ganesha making process"
                className="rounded-lg shadow-lg object-cover w-full max-h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-eco-purple-DEFAULT text-white p-6 rounded-lg shadow-lg">
                <p className="font-heading text-lg font-bold">100% Eco-friendly</p>
                <p className="text-sm">Made from recycled paper</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Choose <span className="text-eco-green-DEFAULT">Eco-friendly</span> Ganesha Idols?
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional clay and plaster of Paris Ganesha idols contain toxic materials that pollute our water bodies. Our eco-friendly paper Ganesha idols offer a sustainable alternative without compromising on beauty or religious significance.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-eco-green-light p-3 rounded-full">
                  <Leaf className="text-eco-green-DEFAULT" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Environmentally Conscious</h3>
                  <p className="text-gray-600 text-sm">
                    Made from recycled paper and natural colors, our idols dissolve safely in water without releasing harmful chemicals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-eco-green-light p-3 rounded-full">
                  <Recycle className="text-eco-green-DEFAULT" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Sustainable Materials</h3>
                  <p className="text-gray-600 text-sm">
                    We use recycled paper, natural adhesives, and vegetable dyes to create beautiful yet environmentally responsible idols.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-eco-green-light p-3 rounded-full">
                  <Droplets className="text-eco-green-DEFAULT" size={24} />
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
