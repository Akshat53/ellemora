import React from "react";
import { Row, Col, Image } from "antd";
import Styles from "./hero.module.css";

const HeroSection: React.FC = () => {
  return (
    <Row>
      <Col className={` ${Styles.img} position-relative`}>
        <div
          className={`${Styles.overlayBox} d-flex h-100 w-100 align-items-end justify-content-center`}
        >
          <p className="text-light heading">dschubdsxcsd</p>
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
