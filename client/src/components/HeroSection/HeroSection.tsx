import React from "react";
import { Row, Col } from "antd";
import Styles from "./hero.module.css";

const HeroSection: React.FC = () => {
  return (
    <Row>
      <Col className={` ${Styles.img} position-relative`}>
        <div
          className={`${Styles.overlayBox} d-flex h-100 w-100 align-items-end justify-content-center`}>
          <p className={`${Styles.tc} heading`}>TAILORED DEISGNING JUST FOR YOU</p>
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
