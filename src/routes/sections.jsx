import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';


export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const MyRequest = lazy(() => import('src/pages/my-request'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const StaffRequest = lazy(() => import('src/pages/staff-request'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'my-request', element: <MyRequest /> },
        { path: 'staff-request', element: <StaffRequest /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
