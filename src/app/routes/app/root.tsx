import { RootLayout } from "@/components/layouts/root-layout";
import { Outlet } from "react-router";

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default AppRoot;
