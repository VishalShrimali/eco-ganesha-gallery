
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

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
  
  const product = { id, name, description, price, size, image };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${id}`} className="block">
        <div className="h-64 bg-eco-green-light overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-4">
          <p className="inline-block bg-eco-purple-light text-eco-purple-dark text-xs font-semibold px-2 py-1 rounded-full mb-2">
            {size}
          </p>
          <Link to={`/products/${id}`}>
            <h3 className="text-xl font-semibold mb-2 hover:text-eco-green-DEFAULT transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-eco-orange-DEFAULT">₹{price}</p>
            <Button 
              onClick={() => addToCart(product)} 
              size="sm" 
              variant="outline"
              className="rounded-full hover:bg-eco-green-DEFAULT hover:text-white border-eco-green-DEFAULT text-eco-green-DEFAULT"
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
