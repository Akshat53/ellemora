import { Col, Row } from 'antd'
import React from 'react'
import Styles from './heading.module.css'

interface headingProps {
    title: string;
}

const Heading: React.FC <headingProps> = ({title}) => {
  return (
    <Row>
        <Col className={`${Styles.col}d-flex lh-lg  text-center fs-5 justify-content-centre w-100 fw-normal heading`}>
            {title}
        </Col>
    </Row>
  )
}

export default Heading