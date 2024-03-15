import React from "react";
import CategoryAvtar from "./CategoryAvtar";
import "./categories.css"
import Sale from "../../assets/images/item1.png"
import Lehengas from "../../assets/images/item3.png"
import Dresses from "../../assets/images/item5.png"
import BestSeller from "../../assets/images/item6.png"

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
    icon: "",
    label: "Sale",
  },
];

const Categories: React.FC = () => {
  return (
    <div className="w-auto scroll-container" style={{ width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}>
   
      {categoriesOptions.map((category, index) => (
        <CategoryAvtar key={index} data={category} />
      ))}

  </div>
  );
};

export default Categories;
