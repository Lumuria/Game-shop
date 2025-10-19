import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Header from '../components/Header'; // تم إزالته لأنه مضاف في App.tsx
// import Footer from '../components/Footer'; // تم إزالته لأنه مضاف في App.tsx
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

const LoginCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow-color);
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
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

const RoleToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const RoleButton = styled.button<{ isActive: boolean }>`
  background-color: ${props => props.isActive ? 'var(--primary-color)' : 'var(--background-color)'};
  color: ${props => props.isActive ? 'white' : 'var(--text-primary)'};
  border: 1px solid var(--border-color);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: ${props => props.isActive ? 'none' : '1px solid var(--border-color)'};
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: ${props => props.isActive ? 'none' : '1px solid var(--border-color)'};
  }

  &:hover {
    background-color: ${props => props.isActive ? 'var(--secondary-color)' : 'var(--hover-color)'};
    color: ${props => props.isActive ? 'white' : 'var(--primary-color)'};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: var(--primary-color);
`;

const CheckboxLabel = styled.label`
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
`;

const LoginButton = styled.button`
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

const ForgotPasswordLink = styled(Link)`
  text-align: center;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
  }
  
  span {
    padding: 0 1rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--surface-color);
  color: var(--text-primary);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 0.75rem;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: var(--background-color);
  }
`;

const SignupPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const SignupLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const LoginPage: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/admin');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoginAsAdmin, setIsLoginAsAdmin] = useState(isAdminRoute);

  useEffect(() => {
    setIsLoginAsAdmin(isAdminRoute);
  }, [isAdminRoute]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      let success = false;
      if (isLoginAsAdmin) {
        // Admin login logic
        // إصلاح مشكلة تسجيل الدخول للأدمن
        if (formData.email === 'admin@example.com' && formData.password === 'admin123') { // استخدام بريد إلكتروني بدلاً من اسم مستخدم

          login({
            id: 'admin',
            email: formData.email,
            name: 'Admin'
          }, true);
          success = true;
        } else {
          setError(t('Wrong Emile or Password'));
        }
      } else {
        // Regular user login logic
        // إصلاح مشكلة تسجيل الدخول للمستخدم العادي
        if (formData.email === 'user@example.com' && formData.password === 'password') { // بيانات مستخدم تجريبية

          login({
            id: '1',
            email: formData.email,
            name: 'John Doe'
          }, false);
          success = true;
        } else {
          setError(t('account.loginErrorUser'));
        }
      }

      if (success) {
        showToast(t('account.loginSuccess'), 'success');
        navigate(isLoginAsAdmin ? '/admin/dashboard' : '/');
      }
    } catch (err) {
      setError(t('account.loginGenericError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    showToast(t('account.socialLoginUnavailable', { provider }), 'info');
  };

  return (
    <PageContainer>
      {/* <Header /> تم إزالته لأنه مضاف في App.tsx */ }
      
      <MainContent>
        <LoginCard>
          <Title>{t(isLoginAsAdmin ? 'account.adminLogin' : 'account.login')}</Title>
          <Subtitle>{t('account.welcomeBack')}</Subtitle>
          
          <RoleToggle>
            <RoleButton isActive={!isLoginAsAdmin} onClick={() => setIsLoginAsAdmin(false)}>
              {t('account.userLogin')}
            </RoleButton>
            <RoleButton isActive={isLoginAsAdmin} onClick={() => setIsLoginAsAdmin(true)}>
              {t('account.adminLogin')}
            </RoleButton>
          </RoleToggle>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="email">{t('Email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('Account-EmailPlaceholder')}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="password">{t('Password')}</Label>
              <PasswordContainer>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('account.passwordPlaceholder')}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <ShowPasswordButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? t('account.hide') : t('account.show')}
                </ShowPasswordButton>
              </PasswordContainer>
            </InputGroup>
            
            <RememberMeContainer>
              <Checkbox
                id="rememberMe"
                name="ememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <CheckboxLabel htmlFor="rememberMe">{t('Remember Me')}</CheckboxLabel>
            </RememberMeContainer>
            
            <LoginButton type="submit" disabled={isLoading}>
              {isLoading ? t('account.loggingIn') : t('account.login')}
            </LoginButton>
          </Form>
          
          <ForgotPasswordLink to="/forgot-password">
            {t('ForgotPassword')}
          </ForgotPasswordLink>
          
          <Divider>
            <span>{t('account.or')}</span>
          </Divider>
          
          <SocialButton onClick={() => handleSocialLogin('Google')}>
            <span>🔍</span>
            {t('Login With Google')}
          </SocialButton>
          
          <SocialButton onClick={() => handleSocialLogin('Facebook')}>
            <span>📘</span>
            {t('Login With Facebook')}
          </SocialButton>
          
          <SignupPrompt>
            {t('')}{' '}
            <SignupLink to="/register">{t('Create New Account')}</SignupLink>
          </SignupPrompt>
        </LoginCard>
      </MainContent>
      
      {/* <Footer /> تم إزالته لأنه مضاف في App.tsx */ }
    </PageContainer>
  );
};

export default LoginPage;
