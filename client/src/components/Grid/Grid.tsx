import React from "react";
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

const AppGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, i) => (
          <div key={i} className={`col-${i === 0 ? "12" : "6"} p-1 m-0 `}>
            <div className="position-relative h-100 ">
              <img src={item.img} alt={item.text} className={styles.gridImage}  />
              <div className={`${styles.overlay} d-flex flex-column align-items-center justify-content-end`}>
                <p className="text-white">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppGrid;