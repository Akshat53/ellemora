import "./custom.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface customCarouselProps {
  data: {
    img: string;
    text: string;
    link : string
  };
}

const CustomCarousel: React.FC<customCarouselProps> = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isActive,setIsActive] = useState(false);

  const settings = {
    centerMode: false,
    centerPadding: "20%",
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    focusOnSelect: true,
    
  };

  return (
    <div className="w-100">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <Link to={idx==imageIndex ? item.link: isActive} key={idx} className="text-decoration-none">
          <div
            className={
              idx === imageIndex ? "slide activeSlide" : "slide slideImg"}>
            <img src={item.img} alt={item.text} />
            <p className="text-center">{item.text}</p>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;