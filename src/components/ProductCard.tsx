
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string;
}

const ProductCard = ({ id, name, description, price, size, image }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = { id, name, description, price, size, image };
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`} className="block relative">
        <div className="h-64 bg-gradient-to-br from-eco-green-light to-white overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-contain p-4 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <button 
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Heart 
              size={18} 
              className={`transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
            />
          </button>
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-4">
          <p className="inline-block bg-eco-purple-light text-eco-purple-dark text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {size}
          </p>
          <Link to={`/products/${id}`}>
            <h3 className="text-xl font-semibold mb-2 hover:text-eco-green-DEFAULT transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-eco-orange-DEFAULT">₹{price}</p>
            <Button 
              onClick={() => addToCart(product)} 
              size="sm" 
              className="rounded-full bg-eco-green-DEFAULT hover:bg-eco-green-dark text-white shadow-sm hover:shadow-md transform transition-all"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
