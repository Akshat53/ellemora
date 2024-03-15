import React from "react";
import FilterIcon from "../../assets/svg/filter.svg";
import Styles from "./filterbox.module.css";
import SingleView from "../../assets/svg/singleView.svg";
import GridView from "../../assets/svg/gridView.svg";

const FilterBox: React.FC = () => {
  return (
    <div className={`d-flex justify-content-between ${Styles.filterBox}`}>
      <div className={`${Styles.filter} p-2 px-3 `}>
        <img src={FilterIcon} />
      </div>
      <div className={`d-flex align-items-center ${Styles.label}`}>
        Lehangas
      </div>
      <div className="d-flex justify-content-end align-items-center mx-3 gap-3">
        <div className="w-100">
          <img src={SingleView} />
        </div>

        <div className="w-100">
          <img src={GridView} />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
