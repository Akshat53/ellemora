import React from "react";

import ProductCard from "../../../components/ProductCard/ProductCard";
import demoImages from "../../../assets/images/demo-product-images";

const data = [
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
    img: [demoImages.img1, demoImages.img2, demoImages.img3],
    colour: ["#570000", "#573400", "#505700"],
  },
];

const Product: React.FC = () => {
  const handleColor = (clicked) => {
    console.log(clicked);
  };
  return (
    <div>
      {data.map((item, index) => (
        <ProductCard
          key={index}
          data={item}
          view={"product"}
          onClick={() => console.log("Product clicked")}
          colors={(clickedColor) => handleColor(clickedColor)}
        />
      ))}
    </div>
  );
};

export default Product;
