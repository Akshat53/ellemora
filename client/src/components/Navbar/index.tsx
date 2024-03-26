import React from "react";
import "./navbar.css";
import SearchIcon from "../../assets/svg/search.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import FavIcon from "../../assets/svg/fav.svg";
import BagIcon from "../../assets/svg/bag.svg";
import MenuIcon from "../../assets/svg/menu.svg";

interface NavbarProps {
  onClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  return (
    <div>
      <div style={{ backgroundColor: "white", position: "relative", zIndex: 2 }} className="appbar">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={MenuIcon}
            className="top-icon menu-icon"
            alt="Menu"
            onClick={onClick}
          />
          <div className="ellemora">ELLEMORA</div>
        </div>
        <div style={{ justifyContent: "space-around" }}>
          <img src={SearchIcon} className="top-icon" alt="Search" />
          <img src={ProfileIcon} className="top-icon" alt="Profile" />
          <img src={FavIcon} className="top-icon" alt="Favorites" />
          <img src={BagIcon} className="top-icon" alt="Bag" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
