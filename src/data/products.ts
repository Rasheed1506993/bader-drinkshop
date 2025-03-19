
import { Product } from '../components/ProductCard';

// جميع المنتجات
export const allProducts: Product[] = [
  // عصائر توب ماكس
  {
    id: 1,
    name: 'برتقال توب ماكس',
    category: 'عصائر توب ماكس',
    image: '/lovable-uploads/1ef0aa8f-503c-44df-bd30-419661563b76.png',
    description: 'عصير برتقال طبيعي 100%',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 2,
    name: 'مشكل توب ماكس',
    category: 'عصائر توب ماكس',
    image: '/lovable-uploads/74b33e27-c08c-4715-8084-a45f5e9f344c.png',
    description: 'مزيج من الفواكه الطازجة',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 3,
    name: 'جوافة توب ماكس',
    category: 'عصائر توب ماكس',
    image: '/lovable-uploads/350799d7-8bb5-46f8-9ec8-0d2748d5136b.png',
    description: 'عصير جوافة طبيعي',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 4,
    name: 'مانجو توب ماكس',
    category: 'عصائر توب ماكس',
    image: '/lovable-uploads/09086fbc-e9fa-4b2d-a80f-823a22c77ee5.png',
    description: 'عصير مانجو طبيعي بدون إضافات',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 5,
    name: 'تفاح توب ماكس',
    category: 'عصائر توب ماكس',
    image: '/lovable-uploads/b503a2c9-a8fd-4938-86dc-27dd18fc6bfc.png',
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
    image: '/lovable-uploads/b503a2c9-a8fd-4938-86dc-27dd18fc6bfc.png',
    description: 'عصير تفاح منعش',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 7,
    name: 'مانجو كادي عادي',
    category: 'عصائر كادي عادي',
    image: '/lovable-uploads/09086fbc-e9fa-4b2d-a80f-823a22c77ee5.png',
    description: 'عصير مانجو طبيعي',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 8,
    name: 'جوافة كادي عادي',
    category: 'عصائر كادي عادي',
    image: '/lovable-uploads/350799d7-8bb5-46f8-9ec8-0d2748d5136b.png',
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
    image: '/lovable-uploads/5e45c492-98ef-42da-82fd-8d0f43ec806c.png',
    description: 'نكتار برتقال طبيعي',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 10,
    name: 'مانجو كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: '/lovable-uploads/cd430ab9-9d4b-4d95-a901-55e66dd6b3f9.png',
    description: 'نكتار مانجو طبيعي',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 11,
    name: 'مشكل كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: '/lovable-uploads/95232885-94d7-4a53-9b66-0e2c68fe9f48.png',
    description: 'نكتار مشكل فواكه',
    size: '200 مل',
    origin: 'السعودية',
    available: true
  }
];

// فئات المنتجات
export const categories = ['عصائر توب ماكس', 'عصائر كادي عادي', 'عصائر كادي نكتار'];
