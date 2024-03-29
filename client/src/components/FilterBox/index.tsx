import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterIcon from "../../assets/svg/filter.svg";
import Styles from "./filterbox.module.css";
import SingleView from "../../assets/svg/singleView.svg";
import GridView from "../../assets/svg/gridView.svg";

interface FilterBoxProps {
  view: string;
  viewChange: (view: string) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ viewChange }) => {
  const [selectedOption, setSelectedOption] = useState("singleView");

  const handleViewChange = (viewType: string) => {
    setSelectedOption(viewType);
    viewChange(viewType === "singleView" ? "list" : "grid");
  };
  
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
          onClick={() => handleViewChange("singleView")}
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
          onClick={() => handleViewChange("gridView")}
        >
          <img src={GridView} alt="grid view icon" aria-label="Grid View" />
        </div>
      </div>
    </div>
  );
};

FilterBox.propTypes = {
  view: PropTypes.string.isRequired,
  viewChange: PropTypes.func.isRequired,
};

export default FilterBox;
