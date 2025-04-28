
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Mumbai",
    image: "/placeholder.svg",
    rating: 5,
    text: "The eco-friendly Ganesha idol we purchased was beautiful and dissolved completely after immersion. It's wonderful to celebrate our traditions while caring for the environment.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Pune",
    image: "/placeholder.svg",
    rating: 5,
    text: "I was skeptical about paper Ganesha idols, but the quality and craftsmanship exceeded my expectations. Beautiful details and completely eco-friendly. Will buy again next year!",
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "Bangalore",
    image: "/placeholder.svg",
    rating: 4,
    text: "Our community purchased several large eco-friendly Ganesha idols this year. Everyone was impressed with the quality and the positive environmental impact.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Delhi",
    image: "/placeholder.svg",
    rating: 5,
    text: "The medium-sized Ganesha idol was perfect for our home celebration. It looked beautiful on our altar and dissolved completely during immersion. Highly recommend!",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-eco-earth-light bg-opacity-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our customers who have embraced eco-friendly celebrations with our paper Ganesha idols.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-center">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500 text-center">{testimonials[currentIndex].location}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16}
                      className={i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-gray-600 italic mb-4">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-eco-purple-light hover:text-eco-purple-dark"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-eco-purple-light hover:text-eco-purple-dark"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
