import { useState, useEffect } from 'react';
import { Product } from '../contexts/CartContext';

// Mock data for demonstration - يجب نقل هذه البيانات إلى ملف منفصل أو جلبها من API حقيقي
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5 Digital Edition',
    category: 'games',
    price: 399.99,
    image: 'https://via.placeholder.com/300x300?text=PS5',
    description: 'Next-gen gaming console with lightning-fast loading times and stunning graphics.',
    inStock: true,
    isNew: true,
  },
  {
    id: '2',
    name: 'Xbox Series X',
    category: 'games',
    price: 499.99,
    image: 'https://via.placeholder.com/300x300?text=Xbox',
    description: 'The most powerful Xbox ever with 4K gaming and high frame rates.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Logitech G Pro X Gaming Headset',
    category: 'accessories',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://via.placeholder.com/300x300?text=Headset',
    description: 'Professional-grade gaming headset with Blue VO!CE microphone technology.',
    inStock: true,
  },
  {
    id: '4',
    name: 'NVIDIA GeForce RTX 3080',
    category: 'components',
    price: 699.99,
    image: 'https://via.placeholder.com/300x300?text=RTX3080',
    description: 'High-end graphics card for ultimate gaming performance.',
    inStock: false,
  },
  {
    id: '5',
    name: 'AMD Ryzen 9 5900X',
    category: 'components',
    price: 549.99,
    discountPrice: 499.99,
    image: 'https://via.placeholder.com/300x300?text=Ryzen9',
    description: '12-core, 24-thread processor for demanding tasks and gaming.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Razer DeathAdder V2 Gaming Mouse',
    category: 'peripherals',
    price: 69.99,
    image: 'https://via.placeholder.com/300x300?text=Mouse',
    description: 'High-precision gaming mouse with optical switches.',
    inStock: true,
  },
  {
    id: '7',
    name: 'Samsung Odyssey G7 32" Gaming Monitor',
    category: 'peripherals',
    price: 799.99,
    discountPrice: 649.99,
    image: 'https://via.placeholder.com/300x300?text=Monitor',
    description: 'Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Corsair Vengeance RGB Pro 32GB RAM',
    category: 'components',
    price: 159.99,
    image: 'https://via.placeholder.com/300x300?text=RAM',
    description: 'High-performance DDR4 memory with RGB lighting.',
    inStock: true,
  }
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // محاكاة جلب المنتجات من API
    setIsLoading(true);
    setError(null);
    try {
      // محاكاة تأخير الشبكة
      setTimeout(() => {
        setProducts(mockProducts);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError('Failed to fetch products.');
      setIsLoading(false);
    }
  }, []);

  return { products, isLoading, error };
};

// يجب إضافة ProductProvider إذا كانت المنتجات ستستخدم في أماكن كثيرة
// ولكن للهوك البسيط، هذا يكفي حاليًا.

// تعريف واجهة Product هنا أيضًا لتجنب الاعتماد على CartContext في هذا الهوك
// ولكن سنعتمد حاليًا على CartContext لتجنب التكرار
// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   discountPrice?: number;
//   image: string;
//   description: string;
//   inStock: boolean;
//   isNew?: boolean;
// }
