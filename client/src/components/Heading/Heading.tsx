import { Col, Row } from "antd";
import React from "react";

interface headingProps {
  title: string;
}

const Heading: React.FC<headingProps> = ({ title }) => {
  return (
    <Row>
      <Col className={`d-flex justify-content-center w-100 heading`}>
        {title}
      </Col>
    </Row>
  );
};

export default Heading;
