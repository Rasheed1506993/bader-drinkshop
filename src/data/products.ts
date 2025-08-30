import { Product } from '../components/ProductCard';

// جميع المنتجات
export const allProducts: Product[] = [
  // عصائر توب ماكس
  {
    id: 1,
    name: 'برتقال توب ماكس',
    category: 'عصائر توب ماكس',
    image: `${import.meta.env.BASE_URL}lovable-uploads/topmax_orange.jpeg`,
    description: 'عصير برتقال طبيعي 100%',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 2,
    name: 'مشكل توب ماكس',
    category: 'عصائر توب ماكس',
    image: `${import.meta.env.BASE_URL}lovable-uploads/topmax.jpg`,
    description: 'مزيج من الفواكه الطازجة',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 3,
    name: 'جوافة توب ماكس',
    category: 'عصائر توب ماكس',
    image: `${import.meta.env.BASE_URL}lovable-uploads/topmaxjs.png`,
    description: 'عصير جوافة طبيعي',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 4,
    name: 'مانجو توب ماكس',
    category: 'عصائر توب ماكس',
    image: `${import.meta.env.BASE_URL}lovable-uploads/topmax_mangos.jpeg`,
    description: 'عصير مانجو طبيعي بدون إضافات',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 5,
    name: 'تفاح توب ماكس',
    category: 'عصائر توب ماكس',
    image: `${import.meta.env.BASE_URL}lovable-uploads/topmax_apple.png`,
    description: 'عصير تفاح منعش',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  
  // عصائر كادي عادي
  {
    id: 6,
    name: 'تفاح كادي عادي',
    category: 'عصائر كادي عادي',
    image: `${import.meta.env.BASE_URL}lovable-uploads/kdapp.jpg`,
    description: 'عصير تفاح منعش',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 7,
    name: 'مانجو كادي عادي',
    category: 'عصائر كادي عادي',
    image: `${import.meta.env.BASE_URL}lovable-uploads/kdor.jpg`,
    description: 'عصير مانجو طبيعي',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 8,
    name: 'جوافة كادي عادي',
    category: 'عصائر كادي عادي',
    image: `${import.meta.env.BASE_URL}lovable-uploads/kdjos.jpg`,
    description: 'عصير جوافة منعش',
    size: '200 مل',
    origin: 'السعودية',
    available: false
  },
  
  // عصائر كادي نكتار
  {
    id: 9,
    name: 'برتقال كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: `${import.meta.env.BASE_URL}lovable-uploads/kdor.jpg`,
    description: 'نكتار برتقال طبيعي',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 10,
    name: 'مانجو كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: `${import.meta.env.BASE_URL}lovable-uploads/kkdora.jpeg`,
    description: 'نكتار مانجو طبيعي',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 11,
    name: 'مشكل كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: `${import.meta.env.BASE_URL}lovable-uploads/kkdman.jpeg`,
    description: 'نكتار مشكل فواكه',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  }
];

// فئات المنتجات
export const categories = ['عصائر توب ماكس', 'عصائر كادي عادي', 'عصائر كادي نكتار'];
