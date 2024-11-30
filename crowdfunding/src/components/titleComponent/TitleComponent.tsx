import React from "react";
import logoMaster from "../../styles/images/logo-mastercraft.svg";
import iconBookmarked from "../../styles/images/icon-bookmark.svg";

function TitleComponent() {
  return (
    <div className="title-box">
      <img className="logoMaster" src={logoMaster} alt="logo-mastercraft" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="footer-title-box">
        <button>Back this project</button>{" "}
        <div className="bookmaked">
          <img src={iconBookmarked} alt="icon-bookmark" />

          <span>Bookmarked</span>
        </div>
      </div>
    </div>
  );
}

export default TitleComponent;
