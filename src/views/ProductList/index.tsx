import React from "react";
import FilterBox from "../../components/FilterBox";
import ProductCard from "../../components/ProductCard/ProductCard";

const data = [
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
  },
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "nk Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
  },
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
  },
];


const ProductList: React.FC = () => {
  return (
    <div>
      <FilterBox />
      {data.map((item ,i) => {
        return <ProductCard data={item} key={i} />;
        console.log(i)
      })}
    </div>
  );
};

export default ProductList;
