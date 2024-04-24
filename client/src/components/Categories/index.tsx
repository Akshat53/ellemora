import React, { useState } from "react";
import "./categories.css";

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 1" },
  { id: 4, name: "Category 2" },
  { id: 5, name: "Category 1" },
  { id: 6, name: "Category 2" },
  { id: 7, name: "Category 1" },
  { id: 8, name: "Category 2" },
];

const CategoriesBar = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div className="scroll-container d-flex overflow-x-auto text-nowrap  p-2 ">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-card p-2 m-2  ${category.id === activeCategoryId ? "active" : ""}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
