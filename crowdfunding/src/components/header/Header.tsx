import React, { useState } from "react";
import Nav from "../nav/NavBar";
import hamburger from "../../styles/images/icon-hamburger.svg";


function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="header-container">
      <div className="logo">
        {showMenu? "" :<h2>crowfund</h2>}
        
      </div>
      <Nav showMenu={showMenu} handleMenu={handleMenu} />
      <div className="menu-box">
        {showMenu ? "" : (
          <img
            className="hamburger"
            src={hamburger}
            alt="hamburger-img"
            onClick={handleMenu}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
