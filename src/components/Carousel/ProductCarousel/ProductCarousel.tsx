import React from "react";
import { Carousel } from "antd";
// import Styles from "./productCarousel.module.css";

interface ProductCarouselProps {
  images: string[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {


  return (
    <Carousel 
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt=""
            style={{
              aspectRatio: "2/3",
              objectFit: "cover",
              height: "auto",
              width: "100%",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
