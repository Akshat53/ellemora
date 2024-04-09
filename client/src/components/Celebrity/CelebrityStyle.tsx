import React from "react";
import celebImages from "../../assets/images/celebstyle/index";
import Styles from "./celebrity.module.css";
import { Button } from "antd";

interface CelebrityStyleProps {
  image1: string;
  image2: string;
  title: string;
  description: string;
  link: string;
}

const celebrityStyleProps: CelebrityStyleProps[] = [
  {
    image1: celebImages.img1,
    image2: celebImages.img2,
    title: "#SPOTTED",
    description:
      "If minimalism is more your vibe, ElleMora has you covered too. Their collection boasts classic silhouettes in neutral tones that are perfect for creating timeless looks.",
    link: "/products",
  },
];

const CelebrityStyle: React.FC = () => {
  return (
    <div className={`${Styles.container} container`}>
      {celebrityStyleProps.map((data, index) => (
        <div className={`${Styles.celebritystyle} row `} key={index}>
          <div className={`col-sm-12 col-md-6 col-lg-6 position-relative mt-2 ${Styles.imgContainer} `}>
            <img
              src={data.image1}
              className={`position-absolute ${Styles.img2}`}
              alt="Image1"
            />
            <img src={data.image2} className={`ms-5 ${Styles.img1}`} alt="Image2" />
          </div>
          <div className={`d-flex flex-column justify-content-center col-sm-12 col-md-6 `}>
            <h3 className={`${Styles.title} mt-3 `}>{data.title}</h3>
            <p className={`${Styles.description} py-3`}>{data.description}</p>
            <Button href={data.link} className={`${Styles.button} border-0 bg-transparent`}>
              SHOP NOW
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CelebrityStyle;
