import React from "react";
import { Row, Col } from "antd";
import Styles from "./hero.module.css";

interface HeroSectionProps {
  children: React.ReactNode;
  img: string,
}

const HeroSection: React.FC<HeroSectionProps> = ({ img,children }) => {
  return (
    <Row>
      <Col
        className={`${Styles.img} position-relative`}
        style={{ backgroundImage: `url(${img})` }}>
        <div
          className={`${Styles.overlayBox} d-flex h-100 w-100 align-items-end justify-content-center`}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
