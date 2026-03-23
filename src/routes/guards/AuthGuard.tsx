import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ROUTE_NAME } from "../../config/ROUTE_DEFINE";

const ROLE_MAP ={
  'affiliate' : ROUTE_NAME.AFFILIATE.DASHBOARD,
}

export const AuthGuard = ({ children, checkRole = [] }: { children: JSX.Element, checkRole?: string[] }) => {
  const {user, isLogin } = useSelector((state: RootState) => state.authReducer);
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  //  Kiểm tra role nếu có role và đã login rồi thì chuyển qua dashboard luôn
  const lowerAllowedRoles = checkRole?.map(role => role.toLowerCase());
  if (checkRole && checkRole.length > 0 && user.roles && user.roles?.some((role: string) => lowerAllowedRoles.includes(role.toLowerCase()))) {
    return <Navigate to={ROLE_MAP[lowerAllowedRoles[0] as keyof typeof ROLE_MAP] || '/' } replace />;
  }
  return children;
};