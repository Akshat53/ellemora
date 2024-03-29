// import { Row, Col } from "antd";
import React from "react";
import Styles from "./shop.module.css";
import img1 from "../../assets/images/home/img2.png"

const ShopNow: React.FC = () => {
  return (
<div className="">
  <div className="position-relative w-100">
    <img src={img1} className="img-fluid" alt="Image" />
    <div className={`${Styles.shop} position-absolute top-50 w-75 h-100 translate-middle d-flex flex-column justify-content-around align-items-center`}>
      <p className={`text-center`}><span>10% OFF</span><br/>ON YOUR FIRST PURCHASE</p>
      <button className="btn ">SHOP NOW</button>
    </div>
  </div>
</div>
  );
};

export default ShopNow;
