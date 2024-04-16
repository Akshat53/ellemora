import "./homeCarousel.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../../ProductCard/ProductCard";

interface homeCarouselProps {
  data: {
    img: string;
    text: string;
    disprice: string;
    orgprice: string;
    link: string;
  };
}

const HomeCarousel: React.FC<homeCarouselProps> = ({ data, view }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
          centerPadding: "12%",
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="w-100 carousel-container">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <div
            className={
              idx === imageIndex ? "slide activeSlide" : "slide "
            }
          >
            <ProductCard view={view} data={item} />
          </div>
          // <Link
          //   to={idx == imageIndex ? item.link : isActive}
          //   key={idx}
          //   className="text-decoration-none"
          // >
          //   <div
          //     className={
          //       idx === imageIndex ? "slide activeSlide" : "slide slideImg"
          //     }
          //   >
          //     <img src={item.img} alt={item.text} />
          //     <p className="text-center text-dark">{item.text}</p>
          //     <p className="m-0 p-0 text-dark">{item.disprice} <span className={`text-decoration-line-through text-muted`}>{item.orgprice}</span></p>
          //   </div>
          // </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
