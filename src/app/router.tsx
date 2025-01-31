import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { paths } from "@/config/paths";
import {
  default as AppRoot,
  ErrorBoundary as AppErrorBoundary,
} from "./routes/app/root";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.root.path,
      element: <AppRoot />,
      ErrorBoundary: AppErrorBoundary,
      children: [
        {
          path: paths.home.path,
          lazy: () => import("./routes/app/home").then(convert(queryClient)),
        },

        {
          path: paths.auth.login.path,
          lazy: () => import("./routes/auth/login").then(convert(queryClient)),
        },
        {
          path: paths.auth.register.path,
          lazy: () =>
            import("./routes/auth/register").then(convert(queryClient)),
        },
      ],
    },

    {
      path: "*",
      lazy: () => import("./routes/404").then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
