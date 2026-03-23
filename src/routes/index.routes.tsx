import { useRoutes, Navigate } from "react-router-dom";
import { Loadable } from "@/utils/loadable";
import { lazy } from "react";

// Import các Loadable components
 const Home = Loadable(lazy(() => import("../pages/Home")));
 const AppLayout = Loadable(lazy(() => import("../layouts/AppLayout")));

export default function Router() {
  return useRoutes([
    // 1. PUBLIC ROUTES (Dùng AppLayout)
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
       
        
      ],
    },

      // userRoutes,
    // { path: "404", element: <ErrorPage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}