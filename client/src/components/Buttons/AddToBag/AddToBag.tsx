import React from "react";
import Styles from "./addToBag.module.css";

interface AddToBagProps {
  view: string;
}

const AddToBag: React.FC<AddToBagProps> = ({ view }) => {
  return (
    <button
      className={`fw-normal border-0 w-100 p-2 btn-color ${
        view === "grid" ? `bg-white text-dark ${Styles.addToBag} ` : ""
      }`}
    >
      ADD TO BAG
    </button>
  );
};

export default AddToBag;
