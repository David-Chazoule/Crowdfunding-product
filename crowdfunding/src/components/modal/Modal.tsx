import React, { useState } from "react";

export interface Modalprops {
  handleModal: () => void;
}

function Modal({ handleModal }: Modalprops) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelect = (cardId: string) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="btn-close" onClick={handleModal}>
          X
        </div>
        <div className="modal-description">
          <h2>Back this project</h2>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>

        <div className="modal-project">
          <div
            className={`modal-card ${
              selectedCard === "card0" ? "selected" : ""
            }`}
            onClick={() => {
              handleCardSelect("card0");
            }}
          >
            <div className="modal-select">
              <span>
                <input
                  type="radio"
                  name="pledge"
                  checked={selectedCard === "card0"}
                />{" "}
                <label>Pledge with no reward</label>
              </span>
            </div>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>

          <div
            className={`modal-card ${
              selectedCard === "card1" ? "selected" : ""
            }`}
            onClick={() => {
              handleCardSelect("card1");
            }}
          >
            <div className="modal-select">
              <div>
                <input
                  type="radio"
                  name="pledge"
                  checked={selectedCard === "card1"}
                />{" "}
                <label> Bamboo Stand</label> <p>Pledge $25 or more</p>
              </div>{" "}
              <div className="modalLeft">
                {" "}
                <h4>101</h4>
                <p>left</p>
              </div>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            {selectedCard === "card1" && (
              <div className="pledge-box">
                <p>Enter your pledge</p>{" "}
                <div className="price-select">
                  <input></input> <button>Continue</button>
                </div>
              </div>
            )}
          </div>

          <div
            className={`modal-card ${
              selectedCard === "card2" ? "selected" : ""
            }`}
            onClick={() => {
              handleCardSelect("card2");
            }}
          >
            <div className="modal-select">
              <div>
                <input
                  type="radio"
                  name="pledge"
                  checked={selectedCard === "card2"}
                />{" "}
                <label>Black Edition Stand</label>
                <p>Pledge $75 or more</p>
              </div>{" "}
              <div className="modalLeft">
                {" "}
                <h4>64</h4>
                <p>left</p>
              </div>
            </div>

            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            {selectedCard === "card2" && (
              <div className="pledge-box">
                <p>Enter your pledge</p>{" "}
                <div className="price-select">
                  <input></input> <button>Continue</button>
                </div>
              </div>
            )}
          </div>

          <div className={`modal-card `}>
            <div className="modal-select">
              <div>
                <input type="radio" name="pledge" />{" "}
                <label>Mahogany Special Edition</label>
                <p>Pledge $200 or more</p>
              </div>{" "}
              <div className="modalLeft">
                {" "}
                <h4>0</h4>
                <p>left</p>
              </div>
            </div>

            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
