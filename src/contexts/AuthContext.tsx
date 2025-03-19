
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // الكلمة السرية للمالك - في تطبيق حقيقي، يجب تخزينها بشكل آمن على الخادم
  const OWNER_PASSWORD = 'badr123';
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // التحقق من وجود جلسة محفوظة عند بدء التطبيق
  useEffect(() => {
    const authStatus = localStorage.getItem('badrAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  
  const login = (password: string): boolean => {
    if (password === OWNER_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('badrAuth', 'true');
      return true;
    }
    return false;
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('badrAuth');
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
