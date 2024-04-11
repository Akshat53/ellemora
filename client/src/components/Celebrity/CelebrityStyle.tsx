import React, { useState } from "react";
import Styles from "./celebrity.module.css";
import { Button } from "antd";
import Slider from "react-slick";

interface CelebrityStyleProps {
  celebrityStyleProps: {
    image1: string;
    image2: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const CelebrityStyle: React.FC<CelebrityStyleProps> = ({ celebrityStyleProps }) => {

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    pauseOnHover: true, 
  };

  return (
    <div
      className={`${Styles.container} py-3 w-100`}
    >
      <Slider {...settings}>
        {celebrityStyleProps.map((data, index) => (
          <div key={index} className={`${Styles.celebritystyle}`}>
            <div
              className={`col-sm-12 col-md-6 col-lg-6 position-relative ${Styles.imgContainer}`}
            >
              <img src={data.image1} className={`position-absolute ${Styles.img2}`} alt="Image1" />
              <img src={data.image2} className={`${Styles.img1}`} alt="Image2" />
            </div>

            <div className={`d-flex flex-column justify-content-center col-sm-12 col-md-6 px-3`}>
              <h3 className={`${Styles.title}`}>{data.title}</h3>
              <p className={`${Styles.description} py-3`}>{data.description}</p>
              <div className="d-flex">
                <Button href={data.link} className={`${Styles.button} px-3 border-1 bg-transparent`}>
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CelebrityStyle;
