import React from 'react'
import { Row, Col, Image } from 'antd'

const BgImg: React.FC = () => {
  return (
    <Row className="home-container" gutter={15}>
      <Col className="home-image-text-container" span={25}>
        <Row className="home-image-container" justify="center" align="middle">
          <Image
            className="home-image img-fluid"
            src="src/assets/images/home/img1.png"
          />
        </Row>
        <Row className="home-text-container" justify="center" align="middle" style={{ marginTop: '1em' }}>
          <div className="home-text">Tailored Designing Just for You</div>
        </Row>
      </Col>
    </Row>
  )
}

export default BgImg