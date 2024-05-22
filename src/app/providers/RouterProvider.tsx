import { pathKeys } from '@/lib/react-router';
import { homePageRoute } from "@/pages/home/home.route";
import { GuestLayout, NakedLayout } from '@/pages/layouts';
import { loginPageRoute } from "@/pages/login/login-page.route";
import { page404Route } from "@/pages/page-404/page-404.route";
import { registerPageRoute } from "@/pages/register/register-page.route";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
// https://github.com/remix-run/react-router/discussions/10166
// function BubbleError() {
//   const error = useRouteError();
//   if (error) throw error;
//   return null;
// }

const router = createBrowserRouter([
  {
    errorElement: <div>Error</div>,
    children: [
      {
        element: <GuestLayout />,
        children: [
          homePageRoute,
          loginPageRoute,
          registerPageRoute
        ],
      },
      {
        element: <NakedLayout />,
        children: [page404Route],
      },
      {
        loader: async () => redirect(pathKeys.page404()),
        path: '*',
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
