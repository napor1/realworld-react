import { NavLink } from "react-router";
import "./index.scss";
import { paths } from "@/config/paths";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-layout-wrapper">
      <NavLink to={paths.home.getHref()}>Home</NavLink>
      ||
      <NavLink to={paths.auth.login.getHref()}>Login</NavLink>
      ||
      <NavLink to={paths.auth.register.getHref()}>Register</NavLink>
      {children}
    </div>
  );
}
