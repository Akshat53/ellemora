import React from "react";
import Slider from "react-slick";
import ProductCard from "../../ProductCard/ProductCard";
import './custom.module.css';

interface HomeCarouselProps {
  data: {
    img: string;
    text: string;
    link: string;
  }[];
}

const CustomCarousel: React.FC<HomeCarouselProps> = ({ data ,view}) => {
  const settings = {
    className: "center",
    centerMode: false, 
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className="p-1">
          <ProductCard data={item} view={view}/>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default CustomCarousel;
