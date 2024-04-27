import  { useState, useEffect, useRef } from "react";
import "./categories.css";


const CategoriesBar = ({categories}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const scrollContainerRef = useRef(null);
  const activeCardRef = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  useEffect(() => {
    if (activeCardRef.current && scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const activeCard = activeCardRef.current;

      const scrollLeft =
        activeCard.offsetLeft -
        scrollContainer.offsetWidth / 2 +
        activeCard.offsetWidth / 2;
      scrollContainer.scroll({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeCategoryId]);

  return (
    <div
      ref={scrollContainerRef}
      className="scroll-container d-flex overflow-x-auto text-nowrap p-2"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          ref={category.id === activeCategoryId ? activeCardRef : null}
          className={`category-card p-2 m-2 ${category.id === activeCategoryId ? "active" : ""}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
