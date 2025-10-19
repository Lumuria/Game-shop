import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name?: string;
  username?: string;
  role?: 'admin' | 'user';
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (user: User, isAdmin?: boolean) => void;
  adminLogin: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // فحص الجلسة المحفوظة عند تحميل التطبيق
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('خطأ في تحليل بيانات المستخدم المحفوظة:', error);
        localStorage.removeItem('currentUser');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData: User, isAdmin = false) => {
    const userWithRole = {
      ...userData,
      role: isAdmin ? 'admin' as const : 'user' as const
    };
    setUser(userWithRole);
    localStorage.setItem('currentUser', JSON.stringify(userWithRole));
  };

  const adminLogin = async (username: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // محاكاة استدعاء API للمصادقة
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // بيانات اعتماد المدير الافتراضية
    const adminCredentials = {
      username: 'admin',
      password: 'admin123'
    };
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      const adminUser: User = {
        id: '1',
        username: 'admin',
        role: 'admin',
        email: 'admin@example.com'
      };
      
      setUser(adminUser);
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    login,
    adminLogin,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth يجب أن يُستخدم داخل AuthProvider');
  }
  return context;
};
