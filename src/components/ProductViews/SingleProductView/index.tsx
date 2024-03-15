import React from "react";

import { Carousel } from "antd";
import Item1 from "../../../assets/images/item5.png";
import Item2 from "../../../assets/images/item2.png";
import Item3 from "../../../assets/images/item3.png";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "590px",

  color: "#fff",
  lineHeight: "160px",
  width: "360px",
  textAlign: "center",


  objectFit: "contain",
};
const SingleProductView: React.FC = () => {
  return (
    <div>
      <Carousel className="d-flex justify-content-center border-none" >
        <div className="d-flex justify-content-center">
          <img src={Item1} style={contentStyle} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={Item2} style={contentStyle} />
        </div>
        <div className="d-flex justify-content-center">
        <img src={Item3} style={contentStyle} />
        </div>
        <div className="d-flex justify-content-center">
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div></div>
    </div>
  );
};

export default SingleProductView;
