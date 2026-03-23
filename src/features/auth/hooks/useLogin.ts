import { useMutation } from '@tanstack/react-query';
import { authApi } from '../services/authApi';
import { useAuthStore } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setAuth(data.user, data.token); // Lưu vào Zustand
      navigate('/pos'); // Chuyển hướng sang POS
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || 'Đăng nhập thất bại');
    },
  });
};