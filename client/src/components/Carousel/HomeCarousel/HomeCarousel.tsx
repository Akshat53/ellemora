import "./homeCarousel.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface homeCarouselProps {
  data: {
    img: string;
    text: string;
    link: string;
  };
}

const HomeCarousel: React.FC<homeCarouselProps> = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // console.log(imageIndex);

  const settings = {
    centerMode: true,
    centerPadding: "20%",
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 554,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "5%",
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="w-100">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <Link to={idx == imageIndex ? item.link : isActive} key={idx}>
            <div
              className={
                idx === imageIndex ? "slide activeSlide" : "slide slideImg"
              }
            >
              <img src={item.img} alt={item.text} />
              <p className="text-center">{item.text}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
