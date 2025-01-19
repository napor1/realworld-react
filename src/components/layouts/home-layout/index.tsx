import React from "react";
import "./index.scss";
import { Col, Row } from "antd";

const Banner = () => {
  return (
    <div className="home-banner">
      <h1 className="home-banner-title">conduit</h1>
      <p className="home-banner-subtitle">A place to share your knowledge.</p>
    </div>
  );
};

const LeftCol = ({ children }: { children: React.ReactNode }) => {
  return (
    <Col span={18} className="home-col">
      {children}
    </Col>
  );
};

const RightCol = ({ children }: { children: React.ReactNode }) => {
  return (
    <Col span={6} className="home-col">
      {children}
    </Col>
  );
};

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      <Row className="home-row">{children}</Row>
    </>
  );
}

HomeLayout.LeftCol = LeftCol;
HomeLayout.RightCol = RightCol;
