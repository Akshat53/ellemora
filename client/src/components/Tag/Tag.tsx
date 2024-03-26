import React from "react";
import Styles from "./tag.module.css";
interface TagProps {
  label?: string[];
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return <div className={`p-2 fw-normal ${Styles.tag}`}>{label}</div>;
};

export default Tag;
