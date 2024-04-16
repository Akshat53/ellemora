import React from "react";
import { Row, Col } from "antd";
// import Styles from "./tailor.module.css";

interface TailorTaleProps {
  children: React.ReactNode;
  video: string,
}

const TailorTale: React.FC<TailorTaleProps> = ({ video,children }) => {
  return (
    <Row>
      <Col
        className={` w-100 h-100`}
        >
          <div className="w-full h-100">
          <video autoPlay loop muted playsInline src={video} width={"100%"} ></video>
          </div>
          
        <div
          className={`h-100 w-100`}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export default TailorTale;
