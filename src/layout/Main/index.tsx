import React, { ReactNode } from "react";

import { Col, Row } from "antd";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;
  return (
    <Row>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default Main;
