import React, { useState } from "react";
import FilterIcon from "../../assets/svg/filter.svg";
import Styles from "./filterbox.module.css";
import SingleView from "../../assets/svg/singleView.svg";
import GridView from "../../assets/svg/gridView.svg";

const FilterBox: React.FC = ( ) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className={`d-flex justify-content-between ${Styles.filterBox}`}>
      <div className={`${Styles.filter} p-2 px-3 `}>
        <img src={FilterIcon} alt="filter icon" aria-label="Filter" />
      </div>
      <div className={`d-flex align-items-center ${Styles.label}`}>
        Lehangas
      </div>
      <div className="d-flex justify-content-end align-items-center mx-3 gap-3">
        <div
          className={`w-100 ${
            selectedOption === "singleView" ? Styles.selected : ""
          }`}
          onClick={() => setSelectedOption("singleView")}
        >
          <img
            src={SingleView}
            alt="single view icon"
            aria-label="Single View"
          />
        </div>

        <div
          className={`w-100 ${
            selectedOption === "gridView" ? Styles.selected : ""
          }`}
          onClick={() => setSelectedOption("gridView")}
        >
          <img src={GridView} alt="grid view icon" aria-label="Grid View" />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
