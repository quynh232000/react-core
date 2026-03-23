import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

interface RoleGuardProps {
  children: JSX.Element;
  allowedRoles: string[]; // Chấp nhận một mảng các quyền
}

export const RoleGuard = ({ children, allowedRoles }: RoleGuardProps) => {
  const { user, isLogin } = useSelector((state: RootState) => state.authReducer);

  // 1. Kiểm tra nếu chưa login (dù AuthGuard thường đã check ở ngoài)
  if (!isLogin || !user) return <Navigate to="/login" />;

  // 2. Kiểm tra quyền: User chỉ cần có 1 trong các role nằm trong allowedRoles
  // Chuyển mảng quyền được cho phép sang lowercase một lần duy nhất
  const lowerAllowedRoles = allowedRoles.map(role => role.toLowerCase());

  // Kiểm tra quyền: Duyệt qua từng role của user, lowercase nó rồi so sánh
  const hasPermission = user.roles?.some((role: string) => 
    lowerAllowedRoles.includes(role.toLowerCase())
  );

  if (!hasPermission) {
    // Nếu không có quyền, điều hướng về trang báo lỗi hoặc trang chủ 
    return <Navigate to="/403" replace />; 
  }
  return children;
};