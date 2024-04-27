import React from "react";
import { Button } from "antd";
import Slider from "react-slick";
import Styles from "./celebrity.module.css";

interface CelebrityStyleProps {
  celebrityStyleProps: {
    image1: string;
    image2: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const CelebrityStyle: React.FC<CelebrityStyleProps> = ({
  celebrityStyleProps,
}) => {
  const containerStyle = {
    maxWidth: "768px",
    margin: "auto",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "rgba(242, 231, 229, 1)",
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        {celebrityStyleProps.map((data, i) => (
          <>
            <div
              className="image-container d-flex justify-content-end w-100"
              style={{ position: "relative" }}
            >
              <img
                src={data.image2}
                alt="Celebrity Style 1"
                className="celeb-img  p-1"
                style={{ width: "52%" }}
              />
              <img
                src={data.image1}
                alt="Celebrity Style 2"
                className="celeb-img "
                style={{
                  position: "absolute",
                  top: "8%",
                  left: "20%",
                  transform: "translateX(-35%)",
                  zIndex: "1",
                  width: "52%",
                }}
              />
            </div>
            <div className="content" style={{ marginTop: "10%" }}>
              <h3 className={`${Styles.title}`}>{data.title}</h3>
              <p className={`${Styles.description} py-3`}>{data.description}</p>
              <div className="d-flex">
                <Button
                  href={data.link}
                  className={`${Styles.button} px-3 border-1 bg-transparent`}
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default CelebrityStyle;
