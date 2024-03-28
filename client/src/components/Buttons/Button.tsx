import React from "react";
import Styles from "./button.module.css"

interface buttonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bgColor: string;
  className: string;
  color: string,
  border : string
}
const AppButton: React.FC<buttonProps> = ({
  label,
  onClick,
  bgColor,
  className,
  color,
  border
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 w-100 `}
      style={{ backgroundColor: bgColor ,color:color, border:border}}
    >
      {label}
    </button>
  );
};


export default AppButton;
