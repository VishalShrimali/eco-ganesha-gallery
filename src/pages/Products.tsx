
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const sizes = ["Small", "Medium", "Large", "Extra Large"];
  const maxPrice = Math.max(...products.map(product => product.price));
  
  useEffect(() => {
    let result = products;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply size filter
    if (selectedSize) {
      result = result.filter(product => product.size === selectedSize);
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [searchTerm, selectedSize, priceRange]);
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSize(null);
    setPriceRange([0, maxPrice]);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-eco-green-DEFAULT py-12 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Eco-Friendly Ganesha Collection</h1>
          <p className="max-w-2xl mx-auto">
            Browse our selection of handcrafted paper Ganesha idols, perfect for sustainable celebrations.
          </p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
          
          {/* Filters - Desktop always visible, Mobile conditionally */}
          <div className={`md:w-1/4 lg:w-1/5 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                {(searchTerm || selectedSize || priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="h-8 text-eco-orange-DEFAULT hover:text-eco-orange-dark"
                  >
                    <X size={16} className="mr-1" />
                    Clear
                  </Button>
                )}
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input pl-10"
                  />
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <div key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`size-${size}`}
                        checked={selectedSize === size}
                        onChange={() => {
                          setSelectedSize(selectedSize === size ? null : size);
                        }}
                        className="rounded text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4"
                      />
                      <label htmlFor={`size-${size}`} className="ml-2 text-sm">{size}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <Slider
                  defaultValue={[0, maxPrice]}
                  min={0}
                  max={maxPrice}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Results Info */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <div className="text-sm text-gray-500">
                Sort by: 
                <select className="ml-2 p-2 border rounded-md text-sm">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
