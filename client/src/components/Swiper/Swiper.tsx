import "./swiper.css";
import { useState } from "react";
import Slider from "react-slick";
import sliderImages from "../../assets/images/slider1/index";

const sliderOptions = [
  {
    img: sliderImages.img1,
    text: "PINK CASCADE SET"
  },
  {
    img: sliderImages.img2,
    text: "PINK CASCADE SET 2"
  },
  {
    img: sliderImages.img3,
    text: "PINK CASCADE SET 3"
  },
  {
    img: sliderImages.img4,
    text: "PINK CASCADE SET 4"
  }
];

function Swiper() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '20%',
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
          centerPadding: '10%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 554,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5%',
          slidesToShow: 1
        }
      }
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="w-100">
      <Slider {...settings}>
        {sliderOptions.map((item, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide slideImg"} key={idx}>
            <img src={item.img} alt={item.text}/>
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Swiper;
