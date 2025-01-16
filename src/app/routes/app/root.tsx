import { HomeLayout } from "@/components/layouts/home-layout";
import { Outlet } from "react-router";

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};

export default AppRoot;
