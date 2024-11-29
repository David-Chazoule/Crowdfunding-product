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
        {showMenu? "" :<h1>crowfund</h1>}
        
      </div>
      <div className={`nav-container ${showMenu?'show-nav-container':''}`}>
      <Nav showMenu={showMenu} handleMenu={handleMenu} />

      </div>
     
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
