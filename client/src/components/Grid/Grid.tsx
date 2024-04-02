import React from "react";
import { Row, Col } from "antd";
import styles from "./grid.module.css";
import gridImages from "../../assets/images/grid1/index";

const data = [
  {
    img: gridImages.img1,
    text: "COCKTAIL & SANGEET",
  },
  {
    img: gridImages.img2,
    text: "DATE DAZZLE",
  },
  {
    img: gridImages.img3,
    text: "CORPORATE CHIC",
  },
  {
    img: gridImages.img4,
    text: "HOLIDAY HAVEN",
  },
  {
    img: gridImages.img5,
    text: "CELEBRATION EDIT",
  },
];

const Grid: React.FC = () => {
  return (
    <div className={`${styles.gridContainer}`}>
      <Row justify="center" gutter={[8, 8]}>
        {data.map((item, i) => (
          <Col className={`${styles.mainImageContainer}  position-relative  w-100`} span={i == 0 ? 24 : 12}>
           
            <img src={item.img} className={`${styles.mainImage} w-100 w-100 `} />
            <div className={`${styles.overlay} d-flex justify-content-center align-items-end w-75  position-absolute h-100`}>
              {item.text}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Grid;