import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && <Sidebar onClick={handleClick} />}

      <Navbar onClick={handleClick} />
    </>
  );
};

export default Header;
