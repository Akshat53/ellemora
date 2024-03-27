import React from "react";
import {  Col, Collapse, Row } from "antd";
import ProductCard from "../../../components/ProductCard/ProductCard";
import demoImages from "../../../assets/images/demo-product-images";
import Styles from "./product.module.css";
import CustomCollapse from "../../../components/Collapse/Collapse";
import ProductCarousel from "../../../components/Carousel/ProductCarousel/ProductCarousel";


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

const collapseOptions = [
  {
    header: "Product Description",
    discription:
      "Elegant and classic blue dress is crafted in bamberg satin. The dress has ring and sequin disc scalloped detailings and a lilac bamberg satin halter slip. Easy to wear that combines classic and contemporary styles.",
    content: [
      {
        title: "LENGTH",
        subContent: "1 Suit",
      },
      {
        title: "SLEEVE TYPE",
        subContent: "Foil Jersey ",
      },
      {
        title: "PRODUCT CODE",
        subContent: "AIJ9839",
      },
      {
        title: "NO. OF COMPONENTS",
        subContent: "AIJ9839",
      },
      {
        title: "FIT",
        subContent: "Fitted at the bust and waist",
      },
      {
        title: "PATTERN",
        subContent: "Dry Clean only",
      },
      {
        title: "NECKLINE",
        subContent: "AIJ9839",
      },
      {
        title: "COMPONENTS",
        subContent: "AIJ9839",
      },
    ],
    categories: ["women", "fusion", "clothes"],
  },
  {
    header: "Composition & Care",
    content: [
      {
        title: "FABRIC",
        subContent: "1 Suit",
      },
      {
        title: "CARE",
        subContent: "1 Suit",
      },
      {
        title: "TYPE OF WORK",
        subContent: "Fitted at the bust and waist",
      },
    ],
  },
  {
    header: "Disclaimer",
    content: [
      {
        title: null,
        subContent:
          "This product will be exclusively handcrafted for you, making the colour/texture/pattern slightly vary from the image shown, due to multiple artisan-led techniques and processes involved.",
      },
    ],
  },
  {
    header: "EXCHANGE & RETURNS",
    content: [
      {
        title: null,
        subContent:
          "Returnable within 3 days of delivery (7 days for Diamond tier members). Custom-made orders are not returnable. For international orders, a restocking or return handling fee of $50 or 20% of the product-selling value, whichever is lower will be applicable. ",
      },
    ],
  },
];
const images= [demoImages.img1, demoImages.img2, demoImages.img3] ;

const Product: React.FC = () => {
  const handleColor = (clicked: string) => {
    console.log(clicked);
  };

  return (
    <Row justify="center" className={`${Styles.product}`}>
      <Col span={24}>
        {data.map((item, index) => (
          <ProductCard
            key={index}
            data={item}
            view={"product"}
            onClick={() => console.log("Product clicked")}
            colors={(clickedColor) => handleColor(clickedColor)}
          />
        ))}
      </Col>

      <Col span={24} className="border-top border-1 border-bottom">
        <CustomCollapse collapseOptions={collapseOptions} />
      </Col>
    <Col>
     <ProductCarousel images={images} />
     </Col>
     
    </Row>
  );
};

export default Product;
