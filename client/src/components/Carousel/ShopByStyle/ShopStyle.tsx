import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './style.css';

interface ShopStyleProps {
    data: {
        img: string;
        text: string;
        link: string;
      };
} 

const ShopStyle: React.FC<ShopStyleProps> = ( { data } ) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 2,
        speed: 500,
        slidesToScroll: 1,
        draggable: true,
        useCSS: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "7%",
            slidesToShow: 1,
            },
        },
        {
            breakpoint: 554,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "13%",
            slidesToShow: 1,
            },
        },
        ],
        beforeChange: (current, next) => setImageIndex(next),
    };

  return (
    <div className="">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <Link
            to={idx == imageIndex ? item.link : isActive}
            key={idx}
            className="text-decoration-none"
          >
            <div
              className={
                idx === imageIndex ? "slide" : "slide"
              }
            >
              <img src={item.img} alt={item.text} className='images'/>
              <p className="text-center text-dark">{item.text}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default ShopStyle