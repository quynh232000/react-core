import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Ép tất cả các thư viện dùng chung một bản React duy nhất trong node_modules
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime'),
    },
  },
  // Quan trọng: Ép Vite tối ưu hóa Material Tailwind đúng cách
  optimizeDeps: {
    include: ['@material-tailwind/react'],
  },
});