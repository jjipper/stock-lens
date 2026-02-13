// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// interface ProtectedRouteProps {
//     childern: React.ReactNode
// }

// export const ProtectedRoute({Children}: ProtectedRouteProps) {
//     const { isAuthenticated } = useAuth();

//     if(!isAuthenticated) {
//         // 인증되지 않은 경우 홈으로 리다이렉트
//         return <Navigate to="/" repalce />
//     }

//     return <>{Children}</>
// }
