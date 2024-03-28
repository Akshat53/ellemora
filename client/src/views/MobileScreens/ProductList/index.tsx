import React, { useState } from "react";
import FilterBox from "../../../components/FilterBox";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Col, Row } from "antd";
import demoImages from "../../../assets/images/demo-product-images/index";

const data = [
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
    img: [demoImages.img1, demoImages.img2, demoImages.img3],
  },
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "nk Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
    img: [demoImages.img1, demoImages.img2, demoImages.img3],
  },
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
    img: [demoImages.img1, demoImages.img2, demoImages.img3],
    colors : []
  },
];
const ProductList: React.FC = () => {
  const [view, setView] = useState("list");
  const [clickedItem, setClickedItem] = useState<{
    title: string;
    discount: string;
    description: string;
    discountedPrice: string;
    originalPrice: string;
    img?: string[];
  } | null>(null);

  const handleProductClick = (product: {
    title: string;
    discount: string;
    description: string;
    discountedPrice: string;
    originalPrice: string;
    img?: string[];
  }) => {
    setClickedItem(product);
  };

  console.log(clickedItem);

  return (
    <div className="w-100">
      <FilterBox
        view={view}
        viewChange={(value) => {
          setView(value);
        }}
      />
      <Row gutter={[8, 8]} className="m-0">
        {data.map((product, i) => (
          <Col span={view == "list" ? 24 : 12} key={i} className={"m-0 p-0"}>
            <ProductCard
              data={product}
              view={view}
              onClick={() => handleProductClick(product)}
          
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProductList;
