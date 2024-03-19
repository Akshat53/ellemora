import React from "react";
import { CloseOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";

interface SidebarProps {
  onClick: () => void;
}
const sidebarOptions = [
  {
    path: "/products",
    style: Styles.newNow,
  },
  {
    path: "/products",
    style: Styles.palazzo,
  },
  {
    path: "/products",
    style: Styles.lehenga,
  },
  {
    path: "/products",
    style: Styles.saree,
  },
  {
    path: "/products",
    style: Styles.drape,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ onClick }) => {
  return (
    <>
      <div
        className={` position-fixed bg-white h-100 d-flex flex-column text-dark align-items-between justify-content-between w-75 ${Styles.sidebar}`}
        style={{
          top: 0,
          left: 0,
          animation: "slideIn 0.5s forwards",
          zIndex: 16,
        }}
      >
        {/* header  */}
        <div>
          <div className="p-3 d-flex justify-content-end w-100 align-items-start">
            <CloseOutlined onClick={onClick} />
          </div>
          {sidebarOptions.map((item) => (
            <Link to={item.path} onClick={onClick} className="">
              <div className={` ${item.style} mt-2`}></div>
            </Link>
          ))}
        </div>
        {/* footer  */}
        <div>
          <div>acihduh</div>
          <div>acihduh</div>
          <div>acihduh</div>
          <div>acihduh</div>
        </div>
      </div>
      <div
        className="overlay w-100 h-100 position-fixed  z-3"
        onClick={onClick}
      ></div>
    </>
  );
};
export default Sidebar;
