import React from "react";
import { CloseOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";
import signIcon from "../../assets/svg/signin.svg";
import wishlistIcon from "../../assets/svg/fav.svg";
import helpIcon from "../../assets/svg/help.svg";

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

const sidebarBottomOptions = [
  {
    icon: signIcon,
    label: "Sign in  / Create account ",
    link: "/signin",
    signedIn: true,
  },
  {
    icon: wishlistIcon,
    label: "Wishlist",
    link: "/wishlist",
    signedIn: true,
  },
  {
    icon: helpIcon,
    label: "Help",
    link: "/help",
    signedIn: true,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ onClick }) => {
  return (
    <>
      <div
        className={`position-fixed bg-white h-100 d-flex flex-column text-dark align-items-between justify-content-between w-75 ${Styles.sidebar}`}
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
          {sidebarBottomOptions.map((item, i) => (
            <Link to={item.link} key={i} style={{ textDecoration: "none" }}>
              <div className="d-flex  align-items-center gap-4 m-3  ">
                <img src={item.icon} height={"12px"} width={"12px"} />
                <p
                  className={`${Styles.sidebarOptions} text-center p-0 m-0 fs-light`}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
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
