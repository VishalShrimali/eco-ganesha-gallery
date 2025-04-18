
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, ShoppingCart, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = id ? getProductById(Number(id)) : null;

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products">
          <Button className="btn-primary">
            <ArrowLeft className="mr-2" size={16} />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm">
            <Link to="/" className="text-gray-500 hover:text-eco-green-DEFAULT">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/products" className="text-gray-500 hover:text-eco-green-DEFAULT">
              Products
            </Link>{" "}
            / <span className="font-medium">{product.name}</span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="bg-eco-green-light rounded-lg p-8 flex items-center justify-center h-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-eco-purple-light inline-block px-3 py-1 rounded-full text-eco-purple-dark text-sm font-medium mb-4">
              {product.size}
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-eco-orange-DEFAULT mb-4">
              ₹{product.price}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Benefits:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-eco-green-DEFAULT mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-6" />

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity:</label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus size={16} />
                </Button>
                <span className="mx-4 text-xl font-medium w-10 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  className="h-10 w-10"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-eco-green-DEFAULT hover:bg-eco-green-dark text-white"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                className="flex-1 bg-eco-orange-DEFAULT hover:bg-eco-orange-dark text-white"
              >
                <ShoppingBag size={18} className="mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Specifications */}
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium bg-gray-50">{key}</td>
                      <td className="py-3 px-4">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="prose max-w-none">
                <h3>About {product.name}</h3>
                <p>
                  Our {product.name} is handcrafted from recycled paper using traditional techniques
                  combined with eco-conscious materials. Each piece is meticulously shaped and painted
                  using natural colors derived from vegetables and plants.
                </p>
                <p>
                  Unlike traditional clay or plaster of Paris idols that harm the environment when
                  immersed in water bodies, our paper Ganesha idols dissolve naturally without
                  releasing any harmful substances. This makes them perfect for environmentally
                  conscious devotees.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>Handcrafted from 100% recycled paper</li>
                  <li>Colored using natural vegetable dyes</li>
                  <li>Completely biodegradable and eco-friendly</li>
                  <li>Dissolves naturally in water</li>
                  <li>Supports local artisans and sustainable practices</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="border-b last:border-0">
                          <td className="py-3 font-medium">{key}</td>
                          <td className="py-3 text-right">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Materials Used</h3>
                  <p className="mb-4">
                    Our eco-friendly Ganesha idols are made using carefully selected sustainable materials:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Recycled paper pulp for the main structure</li>
                    <li>Natural adhesives made from plant-based sources</li>
                    <li>Vegetable and plant-derived colors for decoration</li>
                    <li>No plastic or synthetic materials</li>
                    <li>No harmful chemicals or toxins</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="care" className="pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Care Instructions</h3>
                <p className="mb-4">
                  To keep your eco-friendly Ganesha idol in perfect condition until the immersion day:
                </p>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Storage:</strong> Keep the idol in a dry place away from direct sunlight
                    or moisture. Excessive humidity can affect the paper structure.
                  </li>
                  <li>
                    <strong>Handling:</strong> Handle with clean, dry hands to avoid transferring
                    oils or moisture to the idol.
                  </li>
                  <li>
                    <strong>Decoration:</strong> If decorating the idol, use natural and biodegradable
                    materials that will dissolve along with the idol during immersion.
                  </li>
                  <li>
                    <strong>Immersion:</strong> For immersion, a small bucket or tub at home is
                    recommended. The idol will dissolve naturally over time, and the
                    residual water can be used to water plants.
                  </li>
                  <li>
                    <strong>Large Idols:</strong> For our larger idols, we recommend breaking them
                    into smaller pieces before immersion to speed up the dissolution process.
                  </li>
                </ol>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
