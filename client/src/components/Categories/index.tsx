import React from "react";
import CategoryAvtar from "./CategoryAvtar";
import "./categories.css";
import Sale from "../../assets/images/avtar/img1.png";
import Lehengas from "../../assets/images/avtar/img2.png";
import Dresses from "../../assets/images/avtar/img3.png";
import BestSeller from "../../assets/images/avtar/img4.png";
import Basics from "../../assets/images/avtar/img5.png"

const categoriesOptions = [
  {
    icon: Sale,
    label: "Sale",
  },
  {
    icon: Lehengas,
    label: "Lehengas",
  },
  {
    icon: Dresses,
    label: "Dresses",
  },
  {
    icon: BestSeller,
    label: "Best Seller",
  },
  {
    icon: Basics,
    label: "Basics",
  },
];

const Categories: React.FC = () => {
  return (
    <div
      className="w-auto scroll-container"
      style={{ width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}
    >
      {categoriesOptions.map((category, index) => (
        <CategoryAvtar key={index} data={category} />
      ))}
    </div>
  );
};

export default Categories;
