import { NavLink } from "react-router";
import "./index.scss";
import { Layout } from "antd";
import { paths } from "@/config/paths";

const { Header, Content, Footer } = Layout;

const Banner = () => {
  return (
    <div className="home-banner">
      <h1 className="home-banner-title">conduit</h1>
      <p className="home-banner-subtitle">A place to share your knowledge.</p>
    </div>
  );
};

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

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="home-layout">
      <Header className="home-header">
        <Logo />
        <NavLinks />
      </Header>
      <Banner />
      <Content className="home-content">{children}</Content>
      <Footer className="home-footer">Footer</Footer>
    </Layout>
  );
}
