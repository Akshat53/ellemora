import React from "react";
import styles from "./button.module.css";
import clsx from "clsx";

interface buttonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  className?: string;
  color?: string;
  border?: string;
  icon: string;
}
const AppButton: React.FC<buttonProps> = ({
  label,
  onClick,
  bgColor,
  className,
  color,
  border,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx("p-2", className, styles.globalBtn)}
      style={{ backgroundColor: bgColor, color: color, border: border }}
    >
      <img src={icon} width={"15px"} />
      {label}
    </button>
  );
};

export default AppButton;
