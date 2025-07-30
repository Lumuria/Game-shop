import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// ===== تعريف نوع theme لـ styled-components =====
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      surface: string;
      border: string;
      textSecondary: string;
      hover: string;
      text: string;
      background: string;
      primary: string;
      primaryHover: string;
      error?: string;
    };
  }
}

// ===== تعريف theme =====
const theme = {
  colors: {
    surface: '#fff',
    border: '#ddd',
    textSecondary: '#888',
    hover: '#eee',
    text: '#222',
    background: '#f9f9f9',
    primary: '#007bff',
    primaryHover: '#0056b3',
    error: '#ff4444',
  },
};

// ===== Styled Components =====
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem; right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.text};
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.background};
  padding: 4px;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 0.75rem;
  border: none;
  background: ${(props) => (props.$active ? props.theme.colors.primary : 'transparent')};
  color: ${(props) => (props.$active ? 'white' : props.theme.colors.text)};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${(props) =>
      props.$active ? props.theme.colors.primary : props.theme.colors.hover};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.colors.primary}33`};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error || '#ff4444'};
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// ===== dummy hooks تعريف مؤقت =====
const useAuth = () => ({
  login: async (username: string, password: string) => true,
  register: async (username: string, email: string, password: string) => true,
});

const useLanguage = () => ({
  isRTL: false,
});

const useToast = () => ({
  showToast: (msg: string, type: 'success' | 'error') => alert(`${type.toUpperCase()}: ${msg}`),
});

const useTranslation = () => ({
  t: (key: string) => {
    const dict: Record<string, string> = {
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      username: 'اسم المستخدم',
      enterUsername: 'أدخل اسم المستخدم',
      email: 'البريد الإلكتروني',
      enterEmail: 'أدخل البريد الإلكتروني',
      password: 'كلمة المرور',
      enterPassword: 'أدخل كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      loginSuccess: 'تم تسجيل الدخول بنجاح',
      invalidCredentials: 'اسم المستخدم أو كلمة المرور غير صحيحة',
      passwordMismatch: 'كلمات المرور غير متطابقة',
      registerSuccess: 'تم إنشاء الحساب بنجاح',
      userExists: 'المستخدم موجود مسبقاً',
      genericError: 'حدث خطأ، يرجى المحاولة مرة أخرى',
    };
    return dict[key] || key;
  },
});

// ===== المكون الرئيسي =====

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, register } = useAuth();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const { showToast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (activeTab === 'login') {
        const success = await login(formData.username, formData.password);
        if (success) {
          showToast(t('loginSuccess'), 'success');
          onClose();
        } else {
          setError(t('invalidCredentials'));
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError(t('passwordMismatch'));
          setIsLoading(false);
          return;
        }

        const success = await register(formData.username, formData.email, formData.password);
        if (success) {
          showToast(t('registerSuccess'), 'success');
          onClose();
        } else {
          setError(t('userExists'));
        }
      }
    } catch {
      setError(t('genericError'));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ThemeProvider theme={theme}>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()} dir={isRTL ? 'rtl' : 'ltr'}>
          <CloseButton onClick={onClose}>×</CloseButton>

          <Title>{activeTab === 'login' ? t('login') : t('register')}</Title>

          <TabContainer>
            <Tab $active={activeTab === 'login'} onClick={() => setActiveTab('login')} type="button">
              {t('login')}
            </Tab>
            <Tab $active={activeTab === 'register'} onClick={() => setActiveTab('register')} type="button">
              {t('register')}
            </Tab>
          </TabContainer>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>{t('username')}</Label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder={t('enterUsername')}
                required
              />
            </InputGroup>

            {activeTab === 'register' && (
              <InputGroup>
                <Label>{t('email')}</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('enterEmail')}
                  required
                />
              </InputGroup>
            )}

            <InputGroup>
              <Label>{t('password')}</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={t('enterPassword')}
                required
              />
            </InputGroup>

            {activeTab === 'register' && (
              <InputGroup>
                <Label>{t('confirmPassword')}</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder={t('confirmPassword')}
                  required
                />
              </InputGroup>
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? (
                <LoadingSpinner />
              ) : activeTab === 'login' ? (
                t('login')
              ) : (
                t('register')
              )}
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </ThemeProvider>
  );
};

export default LoginModal;
