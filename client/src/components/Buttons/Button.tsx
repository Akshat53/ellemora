import React from "react";


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
      className={`p-2  ${className}`}
      style={{ backgroundColor: bgColor ,color:color, border:border}}>
      {label}
    </button>
  );
};


export default AppButton;
