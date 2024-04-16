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
        className={`w-100 h-100`}
        >
          <div className="w-full position-relative h-100">
          <img  src={img} alt="project" width={"100%"} />
          </div>
          
        <div
          className={`${Styles.overlayBox} d-flex h-100 w-100 align-items-end justify-content-center position-absolute top-0`}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
