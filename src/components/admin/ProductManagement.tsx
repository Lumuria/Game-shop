import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  category: string;
  description: string;
  descriptionEn: string;
  image: string;
  stock: number;
  featured: boolean;
  createdAt: string;
}

const Container = styled.div`
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin: 0;
  font-size: 1.5rem;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(39, 174, 96, 0.3);
  }
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const ProductCard = styled.div`
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 150px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #bdc3c7;
`;

const ProductName = styled.h3`
  color: #2c3e50;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
`;

const ProductPrice = styled.div`
  color: #27ae60;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const ProductCategory = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

const ProductStock = styled.div<{ inStock: boolean }>`
  color: ${props => props.inStock ? '#27ae60' : '#e74c3c'};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 15px;
`;

const ProductActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button<{ variant?: 'edit' | 'delete' }>`
  background: ${props => 
    props.variant === 'delete' ? '#e74c3c' : 
    props.variant === 'edit' ? '#f39c12' : '#3498db'
  };
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const Modal = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3`
  color: #2c3e50;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7f8c8d;

  &:hover {
    color: #2c3e50;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    price: '',
    category: '',
    description: '',
    descriptionEn: '',
    image: '',
    stock: '',
    featured: false
  });

  // بيانات تجريبية للمنتجات
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: '1',
        name: 'كرت الرسوميات RTX 4080',
        nameEn: 'RTX 4080 Graphics Card',
        price: 4500,
        category: 'كروت الرسوميات',
        description: 'كرت رسوميات عالي الأداء للألعاب',
        descriptionEn: 'High-performance graphics card for gaming',
        image: '🎮',
        stock: 15,
        featured: true,
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        name: 'معالج Intel Core i7',
        nameEn: 'Intel Core i7 Processor',
        price: 2200,
        category: 'المعالجات',
        description: 'معالج قوي للألعاب والعمل',
        descriptionEn: 'Powerful processor for gaming and work',
        image: '💻',
        stock: 8,
        featured: false,
        createdAt: '2024-01-10'
      },
      {
        id: '3',
        name: 'ذاكرة RAM 32GB',
        nameEn: '32GB RAM Memory',
        price: 800,
        category: 'الذاكرة',
        description: 'ذاكرة عشوائية عالية السرعة',
        descriptionEn: 'High-speed random access memory',
        image: '🧠',
        stock: 0,
        featured: false,
        createdAt: '2024-01-05'
      }
    ];
    setProducts(sampleProducts);
  }, []);

  const categories = [
    'كروت الرسوميات',
    'المعالجات',
    'الذاكرة',
    'اللوحات الأم',
    'أقراص التخزين',
    'مزودات الطاقة',
    'الصناديق',
    'أجهزة التبريد'
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      nameEn: '',
      price: '',
      category: '',
      description: '',
      descriptionEn: '',
      image: '',
      stock: '',
      featured: false
    });
    setShowModal(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      nameEn: product.nameEn,
      price: product.price.toString(),
      category: product.category,
      description: product.description,
      descriptionEn: product.descriptionEn,
      image: product.image,
      stock: product.stock.toString(),
      featured: product.featured
    });
    setShowModal(true);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData: Product = {
      id: editingProduct?.id || Date.now().toString(),
      name: formData.name,
      nameEn: formData.nameEn,
      price: parseFloat(formData.price),
      category: formData.category,
      description: formData.description,
      descriptionEn: formData.descriptionEn,
      image: formData.image || '📦',
      stock: parseInt(formData.stock),
      featured: formData.featured,
      createdAt: editingProduct?.createdAt || new Date().toISOString().split('T')[0]
    };

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? productData : p));
    } else {
      setProducts([...products, productData]);
    }

    setShowModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <Container>
      <Header>
        <Title>إدارة المنتجات</Title>
        <AddButton onClick={handleAddProduct}>
          <span>➕</span>
          إضافة منتج جديد
        </AddButton>
      </Header>

      <SearchBar
        type="text"
        placeholder="البحث في المنتجات..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage>{product.image}</ProductImage>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price} ر.س</ProductPrice>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductStock inStock={product.stock > 0}>
              {product.stock > 0 ? `متوفر: ${product.stock}` : 'غير متوفر'}
            </ProductStock>
            <ProductActions>
              <ActionButton variant="edit" onClick={() => handleEditProduct(product)}>
                تعديل
              </ActionButton>
              <ActionButton variant="delete" onClick={() => handleDeleteProduct(product.id)}>
                حذف
              </ActionButton>
            </ProductActions>
          </ProductCard>
        ))}
      </ProductsGrid>

      <Modal show={showModal}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              {editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}
            </ModalTitle>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          </ModalHeader>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>اسم المنتج (عربي)</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>اسم المنتج (إنجليزي)</Label>
              <Input
                type="text"
                name="nameEn"
                value={formData.nameEn}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>السعر (ر.س)</Label>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>الفئة</Label>
              <Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">اختر الفئة</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>الوصف (عربي)</Label>
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>الوصف (إنجليزي)</Label>
              <TextArea
                name="descriptionEn"
                value={formData.descriptionEn}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>رمز الصورة (إيموجي)</Label>
              <Input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="📦"
              />
            </FormGroup>

            <FormGroup>
              <Label>الكمية المتوفرة</Label>
              <Input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                min="0"
                required
              />
            </FormGroup>

            <CheckboxGroup>
              <Checkbox
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
              />
              <Label>منتج مميز</Label>
            </CheckboxGroup>

            <SubmitButton type="submit">
              {editingProduct ? 'تحديث المنتج' : 'إضافة المنتج'}
            </SubmitButton>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ProductManagement;
