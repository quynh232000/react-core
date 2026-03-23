import { Routes, Route, Navigate } from 'react-router-dom';
// import { AppLayout } from '@/layouts';
import { ROUTE_PATHS } from './config';
import AppLayout from '@/layouts/AppLayout';
import  AuthGuard  from '@/routes/guards/AuthGuard';

// Import các trang đã lazy load phía trên...

export const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. PUBLIC ROUTES: Không cần login */}
      <Route path="/auth" element={<AppLayout />}>
        <Route path="login" element={<AppLayout />} />
      </Route>

      {/* 2. PROTECTED ROUTES: Phải Login mới được vào */}
      <Route element={<AuthGuard />}>
        
        {/* Module POS: Dành cho nhân viên & Admin */}
        <Route element={<AppLayout />}>
          {/* <Route path={ROUTE_PATHS.POS} element={<POSPage />} /> */}
        </Route>

        {/* Module ADMIN: Chỉ dành cho Manager hoặc Admin */}
        {/* <Route element={<RoleGuard allowedRoles={['admin', 'manager']} />}>
          <Route element={<AdminLayout />}>
            <Route path={ROUTE_PATHS.ADMIN} element={<AdminDashboard />} />
            <Route path={ROUTE_PATHS.INVENTORY} element={<InventoryPage />} />
          </Route>
        </Route> */}
      </Route>

      {/* 3. CÁC ROUTE PHỤ TRỢ */}
      <Route path="/" element={<Navigate to={ROUTE_PATHS.POS} replace />} />
      <Route path="/403" element={<div>Bạn không có quyền truy cập</div>} />
      <Route path="*" element={<div>Trang không tồn tại</div>} />
    </Routes>
  );
};