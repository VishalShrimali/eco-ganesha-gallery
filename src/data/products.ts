
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string;
  category: string;
  featured: boolean;
  benefits: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mini Eco Ganesha",
    description: "Our smallest eco-friendly Ganesha idol made from recycled paper. Perfect for small spaces and personal worship.",
    price: 499,
    size: "Small",
    image: "/placeholder.svg",
    category: "Small Idols",
    featured: true,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "8 inches",
      "Weight": "300 grams",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 2,
    name: "Medium Eco Ganesha",
    description: "A medium-sized eco-friendly Ganesha idol perfect for home celebrations. Made from sustainable materials.",
    price: 899,
    size: "Medium",
    image: "/placeholder.svg",
    category: "Medium Idols",
    featured: true,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "12 inches",
      "Weight": "600 grams",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 3,
    name: "Large Eco Ganesha",
    description: "A beautiful large-sized eco-friendly Ganesha idol for community celebrations. Made from recycled paper and natural colors.",
    price: 1499,
    size: "Large",
    image: "/placeholder.svg",
    category: "Large Idols",
    featured: false,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "18 inches",
      "Weight": "1.2 kg",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 4,
    name: "Extra Large Eco Ganesha",
    description: "Our largest eco-friendly Ganesha idol, perfect for community celebrations and public installations.",
    price: 2499,
    size: "Extra Large",
    image: "/placeholder.svg",
    category: "Large Idols",
    featured: false,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "24 inches",
      "Weight": "2.5 kg",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 5,
    name: "Seated Paper Ganesha",
    description: "A beautifully crafted seated Ganesha idol made from eco-friendly paper materials.",
    price: 699,
    size: "Small",
    image: "/placeholder.svg",
    category: "Small Idols",
    featured: true,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "8 inches",
      "Weight": "350 grams",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 6,
    name: "Dancing Eco Ganesha",
    description: "A dynamic dancing pose Ganesha idol that brings energy and joy to your celebrations.",
    price: 999,
    size: "Medium",
    image: "/placeholder.svg",
    category: "Medium Idols",
    featured: true,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "14 inches",
      "Weight": "700 grams",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 7,
    name: "Decorative Eco Ganesha",
    description: "A beautifully decorated eco-friendly Ganesha idol with intricate designs and patterns.",
    price: 1299,
    size: "Medium",
    image: "/placeholder.svg",
    category: "Medium Idols",
    featured: false,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "15 inches",
      "Weight": "750 grams",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  },
  {
    id: 8,
    name: "Simple Eco Ganesha",
    description: "A minimalist design Ganesha idol that emphasizes simplicity and eco-friendliness.",
    price: 599,
    size: "Small",
    image: "/placeholder.svg",
    category: "Small Idols",
    featured: false,
    benefits: [
      "100% Eco-friendly",
      "Dissolves easily in water",
      "Handcrafted by local artisans",
      "Natural colors and materials"
    ],
    specifications: {
      "Height": "10 inches",
      "Weight": "400 grams",
      "Material": "Recycled Paper",
      "Colors": "Natural Vegetable Dyes"
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsBySize = (size: string): Product[] => {
  return products.filter(product => product.size === size);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
