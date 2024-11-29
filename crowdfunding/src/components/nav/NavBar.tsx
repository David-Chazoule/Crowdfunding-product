import React, { useState } from "react";
import closeMenu from "../../styles/images/icon-close-menu.svg";

interface NavBarProp {
  showMenu: boolean;
  handleMenu : ()=> void;
}

function NavBar({ showMenu , handleMenu }: NavBarProp) {
  const navbar = ["About", "Discover", "Get Started"];
  return (
    <div className={`navbar ${showMenu ? "show-nav" : ""}`}>
      <div className="title-close-box">
      <h1>crowfund</h1>  <img
            className="icone-close-menu"
            src={closeMenu}
            alt="icon-close"
            onClick={handleMenu}
          />
      </div>
      
      {navbar &&
        navbar.map((elem: string, index: number) => (
          <div className="elem-box" key={index}>
            <h2>{elem}</h2>
           
          </div>
        ))}
    </div>
  );
}

export default NavBar;
