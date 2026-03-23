src/
├── api/                     # 1. Tầng Giao tiếp (Communication Layer)
│   ├── axiosClient.ts       # Cấu hình gốc (Base URL, Timeout)
│   ├── interceptors.ts      # Middleware: Gắn Token, Handle 401 (Refresh Token)
│   └── endpoints.ts         # Quản lý tập trung các URL API từ Laravel
│
├── assets/                  # 2. Tài nguyên tĩnh (Static Assets)
│   ├── images/
│   ├── icons/
│   └── styles/              # Global CSS, Tailwind Config, Theme variables
│
├── components/              # 3. UI Kit dùng chung (Atomic Design - Shared)
│   ├── ui/                  # Các component nguyên tử (Button, Input, Badge, Skeleton)
│   ├── forms/               # Các Input phức tạp (DatePicker, MultiSelect, Upload)
│   ├── feedback/            # Toast, Modal, Dialog, Alert
│   └── layouts/             # Các bộ khung: AdminLayout, POSLayout, AuthLayout
│
├── constants/               # 4. Hằng số (Constants)
│   ├── queryKeys.ts         # Quản lý Key của React Query (tránh trùng lặp)
│   ├── storageKeys.ts       # Tên các key lưu ở LocalStorage
│   └── permissions.ts       # Định nghĩa Role/Permission (Admin, Staff, Chef)
│
├── features/                # 5. TRÁI TIM HỆ THỐNG (Domain/Business Logic)
│   ├── pos/                 # --- Module Bán hàng ---
│   │   ├── components/      # UI riêng cho POS (CartItem, TableMap, MenuGrid)
│   │   ├── hooks/           # usePOSOrder.ts, useCartCalculation.ts
│   │   ├── services/        # apiPOS.ts (Các hàm gọi API cho POS)
│   │   ├── store/           # useCartStore.ts (Zustand: Giỏ hàng tạm thời)
│   │   ├── types/           # pos.types.ts (Interfaces chỉ dùng cho POS)
│   │   ├── utils/           # pos-helpers.ts (Logic tính thuế, discount riêng cho POS)
│   │   └── index.ts         # "Public Gate": Export những gì Page cần
│   ├── inventory/           # --- Module Kho hàng ---
│   └── auth/                # --- Module Đăng nhập/Phân quyền ---
│
├── hooks/                   # 6. Global Hooks (Tiện ích dùng chung)
│   ├── useAuth.ts           # Hook kiểm tra trạng thái đăng nhập toàn app
│   ├── useDebounce.ts       # Dùng cho Search sản phẩm
│   └── useLocalStorage.ts
│
├── pages/                   # 7. Tầng Điều phối (Router/Pages)
│   ├── pos/
│   │   ├── POSPage.tsx      # Lắp ghép các mảnh từ features/pos
│   │   └── POSDetail.tsx
│   ├── admin/
│   │   └── Dashboard.tsx
│   └── NotFound.tsx
│
├── providers/               # 8. Cấu hình Providers (Wrappers)
│   ├── QueryProvider.tsx    # Cấu hình React Query (Retry, StaleTime)
│   ├── AuthProvider.tsx     # Quản lý Context cho User Session
│   └── ThemeProvider.tsx
│
├── routes/                  # 9. Quản lý Tuyến đường (Navigation)
│   ├── AppRoutes.tsx        # Cấu hình React Router chính
│   ├── PrivateRoute.tsx     # Guard: Chặn người dùng chưa login
│   └── PublicRoute.tsx
│
├── types/                   # 10. Kiểu dữ liệu Toàn cục (Global Entities)
│   ├── user.ts              # Interface User (Phản chiếu từ DB Laravel)
│   ├── product.ts           # Interface Product
│   └── common.ts            # API Response, Pagination, Error types
│
├── utils/                   # 11. Tiện ích (Helper Functions)
│   ├── format.ts            # formatCurrency, formatDate
│   └── validation.ts        # Các schema Regex, Yup/Zod validation
│
├── App.tsx                  # Entry Component
└── main.tsx                 # Render Root