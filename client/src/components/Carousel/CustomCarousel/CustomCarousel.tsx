import React from "react";
import Slider from "react-slick";
import ProductCard from "../../ProductCard/ProductCard";
import Styles from './custom.module.css';

interface HomeCarouselProps {
  data: {
    img: string;
    text: string;
    link: string;
  }[];
}

const CustomCarousel: React.FC<HomeCarouselProps> = ({ data ,view}) => {
  const settings = { 
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    speed: 600,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerPadding: "115px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <div className={`${Styles.customCarouselContainer}`}>
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className="px-1">
          <ProductCard data={item} view={view}/>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default CustomCarousel;
