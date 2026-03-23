import { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/useAuthStore';

export const setupInterceptors = (instance: AxiosInstance) => {
  // --- REQUEST INTERCEPTOR ---
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Lấy token từ Zustand Store
      const token = useAuthStore.getState().token;
      
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // --- RESPONSE INTERCEPTOR ---
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Trả thẳng data về để ở Service không cần .data nữa
      return response.data;
    },
    async (error) => {
      const originalRequest = error.config;
      const { status } = error.response || {};

      // 1. Lỗi 401: Hết hạn phiên làm việc hoặc Token sai
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // Đánh dấu để tránh lặp vô tận
        
        // Thực hiện xóa sạch State và đẩy về trang Login
        useAuthStore.getState().logout();
        window.location.href = '/auth/login';
      }

      // 2. Lỗi 403: Không có quyền truy cập
      if (status === 403) {
        console.error('Bạn không có quyền thực hiện hành động này');
      }

      // 3. Lỗi 422: Lỗi Validation từ Laravel
      if (status === 422) {
        // Bạn có thể trả về error.response.data để hiển thị lỗi ở Form
        return Promise.reject(error.response.data);
      }

      // 4. Lỗi 500: Server die
      if (status >= 500) {
        console.error('Lỗi hệ thống, vui lòng thử lại sau');
      }

      return Promise.reject(error);
    }
  );
};