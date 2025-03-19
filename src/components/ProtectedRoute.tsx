
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    // إعادة توجيه إلى صفحة تسجيل الدخول مع حفظ المسار المقصود
    return <Navigate to={`/login?from=${encodeURIComponent(location.pathname)}`} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
