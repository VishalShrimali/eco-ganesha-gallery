
import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

const CartItem = ({ id, name, price, size, image, quantity }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const decreaseQuantity = () => {
    updateQuantity(id, quantity - 1);
  };

  const increaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center py-6 border-b">
      <div className="sm:w-1/4 mb-4 sm:mb-0 sm:pr-4">
        <div className="bg-eco-green-light rounded-lg p-4 h-24 w-24 sm:h-32 sm:w-32 flex items-center justify-center">
          <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
        </div>
      </div>
      
      <div className="sm:w-3/4 flex flex-col sm:flex-row w-full">
        <div className="sm:w-1/2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 mb-1">Size: {size}</p>
          <p className="font-bold text-eco-orange-DEFAULT mb-2">₹{price}</p>
        </div>
        
        <div className="sm:w-1/2 flex flex-col sm:flex-row justify-between items-center sm:items-start mt-4 sm:mt-0">
          <div className="flex items-center mb-4 sm:mb-0">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={14} />
            </Button>
            <span className="mx-3 min-w-[30px] text-center">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full"
              onClick={increaseQuantity}
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="font-bold mb-2">₹{price * quantity}</span>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-auto"
              onClick={() => removeFromCart(id)}
            >
              <Trash size={16} className="mr-1" />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
