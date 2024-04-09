import React from "react";
import { Row, Col } from "antd";
// import Styles from "./tailor.module.css";

interface TailorTaleProps {
  children: React.ReactNode;
  img: string,
}

const TailorTale: React.FC<TailorTaleProps> = ({ img,children }) => {
  return (
    <Row>
      <Col
        className={` w-100 h-100`}
        >
          <div className="w-full h-100">
          <img  src={img} alt="project" width={"100%"} />
          </div>
          
        <div
          className={`} h-100 w-100`}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export default TailorTale;
