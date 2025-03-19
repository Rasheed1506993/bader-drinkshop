
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock products data for search - in real implementation, this would be fetched from API
const productsForSearch = [
  { id: 1, name: 'برتقال توب ماكس', category: 'عصائر توب ماكس' },
  { id: 2, name: 'مشكل توب ماكس', category: 'عصائر توب ماكس' },
  { id: 3, name: 'جوافة توب ماكس', category: 'عصائر توب ماكس' },
  { id: 4, name: 'مانجو توب ماكس', category: 'عصائر توب ماكس' },
  { id: 5, name: 'تفاح توب ماكس', category: 'عصائر توب ماكس' },
  { id: 6, name: 'تفاح كادي عادي', category: 'عصائر كادي عادي' },
  { id: 7, name: 'مانجو كادي عادي', category: 'عصائر كادي عادي' },
  { id: 8, name: 'جوافة كادي عادي', category: 'عصائر كادي عادي' },
  { id: 9, name: 'برتقال كادي نكتار', category: 'عصائر كادي نكتار' },
  { id: 10, name: 'مانجو كادي نكتار', category: 'عصائر كادي نكتار' },
  { id: 11, name: 'مشكل كادي نكتار', category: 'عصائر كادي نكتار' },
];

interface ProductSearchProps {
  onClose?: () => void;
}

const ProductSearch = ({ onClose }: ProductSearchProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      if (onClose) onClose();
    }
  };

  const filteredProducts = query.trim() === '' 
    ? [] 
    : productsForSearch.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن المنتجات..."
          className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-badr-gold focus:border-transparent transition-all duration-300 dir-rtl"
        />
        <button 
          type="submit" 
          className="absolute left-3 text-gray-500 hover:text-badr-gold transition-colors duration-300"
          aria-label="بحث"
        >
          <Search size={20} />
        </button>
        {onClose && (
          <button 
            type="button" 
            onClick={onClose}
            className="absolute right-3 text-gray-500 hover:text-red-500 transition-colors duration-300"
            aria-label="إغلاق"
          >
            <X size={20} />
          </button>
        )}
      </form>

      {filteredProducts.length > 0 && (
        <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {filteredProducts.map(product => (
              <li key={product.id} className="hover:bg-gray-50">
                <button
                  className="w-full text-right px-4 py-3 dir-rtl"
                  onClick={() => {
                    navigate(`/products?search=${encodeURIComponent(product.name)}`);
                    if (onClose) onClose();
                  }}
                >
                  <p className="font-medium text-badr-black">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
