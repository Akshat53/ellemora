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
      <div className="bg-black text-light text-center p-2 text-wrap fw-light lh-sm">Get 10% off on your 1st purchase. Use code: welcome10</div>
      <Navbar onClick={handleClick} />
    </>
  );
};

export default Header;
