import { Row, Col } from "antd";
import React from "react";
import Styles from "./shop.module.css";

const ShopNow: React.FC = () => {
  return (
    <Row>
      <Col className={`${Styles.img2} mt-2 w-100 h-25 position-relative`}>
        <img src="/src/assets/images/home/img2.png" className="w-100" />
        <div className={`${Styles.shop} position-absolute d-flex flex-column justify-content-between w-100  h-75`}>
          <div className={`${Styles.text}`}>
            <p className={`${Styles.text} text-centre`}><span>10 %</span> ON YOUR FIRST PURCHASE</p>
          </div>
          <button className={`${Styles.btn} text-center w-25 f-p`}>SHOP NOW</button>
        </div>
      </Col>
    </Row>
  );
};

export default ShopNow;
