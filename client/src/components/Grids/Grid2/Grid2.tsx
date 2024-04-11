import React from 'react'
import Styles from './grid2.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import grid2Img from '../../../assets/images/grid2/index';

interface GridItem {
  image: string;
  title: string;
}

const gridItems: GridItem[] = [
  {
    image: grid2Img.img1,
    title: "THROW A PARTY",
  },
  {
    image: grid2Img.img2,
    title: "GO ON A VACATION",
  },
  {
    image: grid2Img.img3,
    title: "MATERNITY SHOOT",
  },
  {
    image: grid2Img.img4,
    title: "WORK WEAR",
  },
  {
    image: grid2Img.img5,
    title: "A PERFECT GIFT",
  },
  {
    image: grid2Img.img6,
    title: "PRICE DROP",
  },
];


const Grid2: React.FC = () => {
  return (
    <Container className={``}>
      <Row className=''>
        {gridItems.map((gridItem, index) => (
          <Col key={index} className={`p-1`} sm={4} md={3} lg={3} xs={4}>
            <div className={`p-2 my-3 text-center`}>
            <img src={gridItem.image} alt={gridItem.title} className={`${Styles.gridItemImage} w-100`} />
            <h3 className={`${Styles.gridItemTitle} my-2`}>{gridItem.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Grid2