
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  ArrowLeft, 
  CheckCircle2, 
  Truck, 
  Shield,
  MapPin
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "card",
    saveInfo: true,
  });

  // Calculate order totals
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 99 : 0;
  const tax = Math.round(subtotal * 0.18); // 18% tax
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate cart is not empty
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      navigate("/products");
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate("/order-success");
      toast.success("Order placed successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Your cart is empty</h2>
        <p className="mb-8">Add some products to your cart to proceed with checkout.</p>
        <Link to="/products">
          <Button className="btn-primary">
            <ArrowLeft className="mr-2" size={16} />
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-sm text-gray-600 hover:text-eco-green-DEFAULT">
            <ArrowLeft size={16} className="mr-1" />
            Back to Cart
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center mb-4">
                  <MapPin size={20} className="text-eco-green-DEFAULT mr-2" />
                  <h2 className="text-xl font-semibold">Shipping Address</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="address">
                      Address*
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-input"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="city">
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="state">
                        State*
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="pincode">
                        PIN Code*
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="rounded text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4 mr-2"
                    />
                    <label htmlFor="saveInfo" className="text-sm">
                      Save this information for next time
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center mb-4">
                  <CreditCard size={20} className="text-eco-green-DEFAULT mr-2" />
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4"
                    />
                    <label htmlFor="card" className="ml-2">
                      Credit/Debit Card
                    </label>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="pl-6 pt-2 space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Card Number*</label>
                        <input type="text" placeholder="1234 5678 9012 3456" className="form-input" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry Date*</label>
                          <input type="text" placeholder="MM/YY" className="form-input" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV*</label>
                          <input type="text" placeholder="123" className="form-input" required />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === "upi"}
                      onChange={handleInputChange}
                      className="text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4"
                    />
                    <label htmlFor="upi" className="ml-2">
                      UPI
                    </label>
                  </div>

                  {formData.paymentMethod === "upi" && (
                    <div className="pl-6 pt-2">
                      <label className="block text-sm font-medium mb-2">UPI ID*</label>
                      <input type="text" placeholder="yourname@upi" className="form-input" required />
                    </div>
                  )}

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4"
                    />
                    <label htmlFor="cod" className="ml-2">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-eco-orange-DEFAULT hover:bg-eco-orange-dark text-white py-3"
              >
                {isSubmitting ? "Processing..." : `Pay ₹${total} and Place Order`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              {/* Products */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 block text-sm">
                        {item.quantity} x ₹{item.price}
                      </span>
                    </div>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Price Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping > 0 ? `₹${shipping}` : "Free"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span>₹{tax}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* Trust Features */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-eco-green-DEFAULT mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">All our products are 100% eco-friendly and made from recycled materials</span>
                </div>
                <div className="flex items-start">
                  <Truck size={18} className="text-eco-green-DEFAULT mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Fast shipping within 3-5 business days</span>
                </div>
                <div className="flex items-start">
                  <Shield size={18} className="text-eco-green-DEFAULT mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
