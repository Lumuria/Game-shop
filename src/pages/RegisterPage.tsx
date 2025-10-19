import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../contexts/ToastContext';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--background-color);
`;

const RegisterCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow-color);
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
  border: 1px solid var(--border-color);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.75rem 1rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : 'var(--border-color)'};
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#ef4444' : 'var(--primary-color)'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
  }
  
  &::placeholder {
    color: var(--text-secondary);
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    color: var(--text-primary);
  }
`;

const PasswordStrength = styled.div<{ strength: number }>`
  height: 4px;
  background-color: var(--border-color);
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.strength}%;
    background-color: ${props => {
      if (props.strength < 30) return '#ef4444';
      if (props.strength < 60) return '#f59e0b';
      if (props.strength < 80) return '#eab308';
      return '#10b981';
    }};
    transition: all 0.3s ease;
  }
`;

const PasswordHint = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`;

const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: var(--primary-color);
  margin-top: 0.125rem;
`;

const CheckboxLabel = styled.label`
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  line-height: 1.4;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const RegisterButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--secondary-color);
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const LoginLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 10;
    return Math.min(strength, 100);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'الاسم الأول مطلوب';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'الاسم الأخير مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful registration
      const newUser = {
        id: Date.now().toString(),
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`
      };
      
      login(newUser, false);
      showToast('تم إنشاء الحساب بنجاح! مرحباً بك في متجر جيم تك', 'success');
      navigate('/');
    } catch (err) {
      showToast('حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <RegisterCard>
          <Title>{t('account.register')}</Title>
          <Subtitle>إنشاء حساب جديد للاستمتاع بتجربة تسوق مميزة</Subtitle>
          
          <Form onSubmit={handleSubmit}>
            <InputRow>
              <InputGroup>
                <Label htmlFor="firstName">الاسم الأول</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="أحمد"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  hasError={!!errors.firstName}
                />
                {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="lastName">الاسم الأخير</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="محمد"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  hasError={!!errors.lastName}
                />
                {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
              </InputGroup>
            </InputRow>
            
            <InputGroup>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ahmed@example.com"
                value={formData.email}
                onChange={handleInputChange}
                hasError={!!errors.email}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="password">كلمة المرور</Label>
              <PasswordContainer>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="أدخل كلمة مرور قوية"
                  value={formData.password}
                  onChange={handleInputChange}
                  hasError={!!errors.password}
                />
                <ShowPasswordButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'إخفاء' : 'إظهار'}
                </ShowPasswordButton>
              </PasswordContainer>
              {formData.password && (
                <>
                  <PasswordStrength strength={passwordStrength} />
                  <PasswordHint>
                    قوة كلمة المرور: {passwordStrength < 30 ? 'ضعيفة' : passwordStrength < 60 ? 'متوسطة' : passwordStrength < 80 ? 'جيدة' : 'قوية جداً'}
                  </PasswordHint>
                </>
              )}
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
              <PasswordContainer>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="أعد إدخال كلمة المرور"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  hasError={!!errors.confirmPassword}
                />
                <ShowPasswordButton
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? 'إخفاء' : 'إظهار'}
                </ShowPasswordButton>
              </PasswordContainer>
              {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
            </InputGroup>
            
            <CheckboxContainer>
              <Checkbox
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />
              <CheckboxLabel htmlFor="agreeToTerms">
                أوافق على <Link to="/terms">الشروط والأحكام</Link> و <Link to="/privacy">سياسة الخصوصية</Link>
                {errors.agreeToTerms && <ErrorText style={{ display: 'block', marginTop: '0.25rem' }}>{errors.agreeToTerms}</ErrorText>}
              </CheckboxLabel>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                id="subscribeNewsletter"
                name="subscribeNewsletter"
                type="checkbox"
                checked={formData.subscribeNewsletter}
                onChange={handleInputChange}
              />
              <CheckboxLabel htmlFor="subscribeNewsletter">
                أرغب في تلقي النشرة الإخبارية والعروض الخاصة
              </CheckboxLabel>
            </CheckboxContainer>
            
            <RegisterButton type="submit" disabled={isLoading}>
              {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
            </RegisterButton>
          </Form>
          
          <LoginPrompt>
            لديك حساب بالفعل؟{' '}
            <LoginLink to="/login">تسجيل الدخول</LoginLink>
          </LoginPrompt>
        </RegisterCard>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default RegisterPage;
