import React from "react";

interface buttonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bgColor: string;
  className: string;
}
const AppButton: React.FC<buttonProps> = ({
  label,
  onClick,
  bgColor,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 w-100`}
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </button>
  );
};

export default AppButton;
