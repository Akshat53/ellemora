import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterIcon from "../../assets/svg/filter.svg";
import Styles from "./filterbar.module.css";
import SingleView from "../../assets/svg/singleView.svg";
import GridView from "../../assets/svg/gridView.svg";
import AppModal from "../AppModal/appModal";
import Filter from "../Filter/Filter";

interface FilterBoxProps {
  view: string;
  viewChange: (view: string) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ viewChange }) => {
  const [selectedOption, setSelectedOption] = useState("singleView");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewChange = (viewType: string) => {
    setSelectedOption(viewType);
    viewChange(viewType === "singleView" ? "list" : "grid");
  };

  const onClick = () => {
    setIsModalOpen(true);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`d-flex justify-content-start ${Styles.filterBox} position-relative  `}
      >
        <div className={`${Styles.filter} p-2 px-3 `}>
          <img
            src={FilterIcon}
            alt="filter icon"
            aria-label="Filter"
            onClick={onClick}
          />
        </div>
        <div
          className={`d-flex align-items-center ${Styles.label} position-absolute start-50  h-100 translate-middle top-50`}
        >
          Lehangas
        </div>
        <div className="d-flex justify-content-center align-items-center mx-2 gap-3 position-absolute  end-0 h-100">
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
      <AppModal onClose={toggleModal} open={isModalOpen}>
        <div className="d-flex row p-3">
          <Filter />
        </div>
      </AppModal>
    </>
  );
};

FilterBox.propTypes = {
  view: PropTypes.string.isRequired,
  viewChange: PropTypes.func.isRequired,
};

export default FilterBox;
