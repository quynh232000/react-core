/* eslint-disable @typescript-eslint/no-explicit-any */

import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import { Suspense,  type ComponentType } from 'react';

// Component hiển thị khi đang tải trang (Loading Screen)


// HOC (Higher-Order Component) để Loadable hóa các Page
export const Loadable = (Component: ComponentType<any>) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);
