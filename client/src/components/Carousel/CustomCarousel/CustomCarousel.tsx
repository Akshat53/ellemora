import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface homeCarouselProps {
  data: {
    img: string;
    text: string;
    link: string;
  };
}

const CustomCarousel: React.FC<homeCarouselProps> = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <Link to={"/"} key={idx} className="text-decoration-none">
            <div>
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
