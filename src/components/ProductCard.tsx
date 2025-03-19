
import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsappButton from './WhatsappButton';
import { Card, CardContent } from '@/components/ui/card';
import { Edit } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  size: string;
  origin: string;
  available: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
      <div className="relative h-56 bg-badr-gray overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 border-4 border-badr-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-contain transition-opacity duration-300 transform hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
        {isAuthenticated && (
          <Link 
            to={`/products/edit/${product.id}`}
            className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            title="تعديل المنتج"
          >
            <Edit className="h-4 w-4 text-badr-black" />
          </Link>
        )}
      </div>
      <CardContent className="p-4 dir-rtl">
        <h3 className="text-lg font-bold text-badr-black mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex flex-wrap justify-between text-sm mb-3">
          <span className="bg-badr-gray px-2 py-1 rounded-full text-gray-700 mb-1">
            {product.size}
          </span>
          <span className="bg-badr-gray px-2 py-1 rounded-full text-gray-700 mb-1">
            {product.origin}
          </span>
          <span className={`px-2 py-1 rounded-full ${product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} mb-1`}>
            {product.available ? 'متوفر' : 'غير متوفر'}
          </span>
        </div>
        <WhatsappButton 
          phoneNumber="+9660534488744" 
          message={`أود الاستفسار عن ${product.name}`}
          className="w-full text-center justify-center mt-2"
        />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
