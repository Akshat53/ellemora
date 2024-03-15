import React from "react";
import "./navbar.css";

import SearchIcon from "../../assets/svg/search.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import FavIcon from "../../assets/svg/fav.svg";
import BagIcon from "../../assets/svg/bag.svg";
import MenuIcon from "../../assets/svg/menu.svg";

const Navbar: React.FC = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="appbar">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src={MenuIcon} className="top-icon" alt="Menu" />
        <div className="ellemora">ELLEMORA</div>
      </div>
      <div style={{ justifyContent: "space-around" }}>
        <img src={SearchIcon} className="top-icon" alt="Search" />
        <img src={ProfileIcon} className="top-icon" alt="Profile" />
        <img src={FavIcon} className="top-icon" alt="Favorites" />
        <img src={BagIcon} className="top-icon" alt="Bag" />
      </div>
    </div>
  );
};

export default Navbar;
