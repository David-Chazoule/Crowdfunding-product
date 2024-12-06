import React, { useState } from "react";
import logoMaster from "../../styles/images/logo-mastercraft.svg";
import Bookmark from "../UI/Bookmark";

export interface Titleprops {
  handleModal: () => void;
}

function TitleComponent({ handleModal }: Titleprops) {
  const [selectBookmarked, setSelectBookmarked] = useState<boolean>(false);

  const handleBookmarked = () => {
    setSelectBookmarked(!selectBookmarked);
  };

  return (
    <div className="title-box">
      <img className="logoMaster" src={logoMaster} alt="logo-mastercraft" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="footer-title-box">
        <button onClick={handleModal}>Back this project</button>{" "}
        <div className="bookmaked" onClick={handleBookmarked}>
          <div className="logo-bookmaked-box">
            <Bookmark selectBookmarked={selectBookmarked} />
          </div>

          <span
            className={` bookmark-border ${
              selectBookmarked ? "" : "bookmark-selected"
            }`}
          >
            {selectBookmarked ? "Bookmark" : " Bookmarked"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TitleComponent;
