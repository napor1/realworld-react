import { NavLink } from "react-router";
import "./index.scss";
import { Layout } from "antd";
import { paths } from "@/config/paths";

const { Header, Content, Footer } = Layout;

const Logo = () => {
  return (
    <NavLink className="logo" to={paths.home.getHref()}>
      conduit
    </NavLink>
  );
};

const NavLinks = () => {
  return (
    <div className="nav-links-wrapper">
      <NavLink className="nav-link" to={paths.home.getHref()}>
        Home
      </NavLink>
      <NavLink className="nav-link" to={paths.auth.login.getHref()}>
        Login
      </NavLink>
      <NavLink className="nav-link" to={paths.auth.register.getHref()}>
        Register
      </NavLink>
    </div>
  );
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="root-layout">
      <Header className="root-header">
        <Logo />
        <NavLinks />
      </Header>
      <Content className="root-content">{children}</Content>
      <Footer className="root-footer">Footer</Footer>
    </Layout>
  );
}
