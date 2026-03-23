import axiosClient from '@/api/axiosClient';
import { LoginPayload, LoginResponse } from '../types';

export const authApi = {
  login: (data: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post('/auth/login', data);
  },
};