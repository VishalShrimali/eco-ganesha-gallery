
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const [products, setProducts] = useState(getFeaturedProducts());

  return (
    <section className="section-padding bg-eco-purple-light bg-opacity-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular eco-friendly Ganesha idols, handcrafted with love and care for both tradition and environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              size={product.size}
              image={product.image}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button 
              variant="outline" 
              className="btn-outline"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
