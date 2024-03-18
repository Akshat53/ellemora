import React from "react";
import { Carousel } from "antd";

interface ProductCarouselProps {
  images: string[]; 
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  return (
    <Carousel className="">
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
