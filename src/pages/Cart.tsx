
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, Trash } from "lucide-react";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { cartItems, clearCart, getCartTotal } = useCart();
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplyingCoupon(true);
    
    // Simulate API request delay
    setTimeout(() => {
      if (couponCode.toLowerCase() === "eco20") {
        toast.success("Coupon applied successfully!");
      } else {
        toast.error("Invalid coupon code");
      }
      setIsApplyingCoupon(false);
    }, 1000);
  };

  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      clearCart();
    }
  };

  // Calculate totals
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 99 : 0;
  const discount = 0; // Would be calculated based on applied coupons
  const total = subtotal + shipping - discount;

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">
                    Cart Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                  <Button 
                    variant="ghost" 
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={handleClearCart}
                  >
                    <Trash size={16} className="mr-2" />
                    Clear Cart
                  </Button>
                </div>

                {cartItems.map((item) => (
                  <CartItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    image={item.image}
                    quantity={item.quantity}
                  />
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="text-left">
                <Link to="/products">
                  <Button variant="outline" className="hover:bg-eco-green-light hover:text-eco-green-DEFAULT">
                    <ShoppingBag size={16} className="mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                {/* Price Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping > 0 ? `₹${shipping}` : "Free"}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-eco-green-DEFAULT">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                {/* Coupon Code */}
                <form onSubmit={handleApplyCoupon} className="mb-6">
                  <label className="block text-sm font-medium mb-2">Apply Coupon Code</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="form-input rounded-r-none"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button 
                      type="submit" 
                      variant="outline"
                      disabled={isApplyingCoupon || !couponCode}
                      className="rounded-l-none border-l-0"
                    >
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Try "ECO20" for 20% off</p>
                </form>

                {/* Checkout Button */}
                <Link to="/checkout" className="w-full">
                  <Button className="w-full bg-eco-orange-DEFAULT hover:bg-eco-orange-dark text-white">
                    Proceed to Checkout
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-center text-sm text-gray-500 mb-4">Secure Payment Options</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  </div>
                  <p className="text-center text-xs text-gray-500">
                    Secure checkout provided by trusted payment gateways
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              It looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button className="btn-primary">
                Browse Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
