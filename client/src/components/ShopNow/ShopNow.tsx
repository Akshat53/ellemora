// import { Row, Col } from "antd";
import React from "react";
import Styles from "./shop.module.css";
import img1 from "../../assets/images/home/img2.png"

const ShopNow: React.FC = () => {
  return (

  <div className="position-relative w-100 mt-1">
    <img src={img1} className="w-100" alt="Image" />
    <div className={`${Styles.shop} position-absolute top-50 w-50 h-100 translate-middle d-flex flex-column justify-content-around align-items-center`}>
      <p className={`text-center`}><span>10% OFF</span><br/>ON YOUR FIRST PURCHASE</p>
      <button className="btn btn-outline-light">SHOP NOW</button>
    </div>
  </div>

  );
};

export default ShopNow;
