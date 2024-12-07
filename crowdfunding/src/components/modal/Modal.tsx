import React, { useState, useEffect } from "react";
import { useAppState } from "../../appContext/AppContext";

import Closer from "../UI/Closer";
export interface Modalprops {
  handleModal: () => void;
  handleConfirm: () => void;
}

function Modal({ handleModal, handleConfirm }: Modalprops) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { state, dispatch } = useAppState();
  const { bambooStandQuantity, blackEditionQuantity } = state;

  const [prices, setPrices] = useState({
    bamboPrice: state.bamboPrice,
    blackEditionPrice: state.blackEditionPrice,
  });

  // Effect hook to update prices whenever the selected card or prices from the global state change
  useEffect(() => {
    // If Bamboo Stand is selected, update its price
    if (selectedCard === "card1") {
      setPrices((prev) => ({ ...prev, bamboPrice: state.bamboPrice }));
      // If Black Edition is selected, update its price
    } else if (selectedCard === "card2") {
      setPrices((prev) => ({
        ...prev,
        blackEditionPrice: state.blackEditionPrice,
      }));
    }
  }, [selectedCard, state.bamboPrice, state.blackEditionPrice]);

  // Handler to update prices when the input value changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the value from the input field (convert to number or leave empty string)
    const value = e.target.value === "" ? "" : Number(e.target.value);
    // Update the price state based on the selected card

    const key = selectedCard === "card1" ? "bamboPrice" : "blackEditionPrice";

    setPrices((prev) => ({
      ...prev,
      [key]: value, // Update the specific price (either bamboPrice or blackEditionPrice)
    }));
    setError(null);
  };

  // Handle form submission
  const handleSumbmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation: check if the input price is less than the minimum price for the selected card
    if (selectedCard === "card1" && prices.bamboPrice < state.bamboPrice) {
      setError(`Minimum value is $${state.bamboPrice} for Bamboo Stand.`);
      return;
    }

    if (
      selectedCard === "card2" &&
      prices.blackEditionPrice < state.blackEditionPrice
    ) {
      setError(
        `Minimum value is $${state.blackEditionPrice} for Black Edition.`
      );
      return;
    } else {
      // If the input is valid, dispatch actions and perform the necessary updates
      dispatch({ type: "ADD_TO_BACKERS", payload: 1 });
      handleModal();
      handleConfirm();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Perform additional actions based on the selected card
      if (selectedCard === "card1")
        dispatch({ type: "SUBTRACT_BAMBO_QUANTITY", payload: 1 });
      dispatch({ type: "ADD_TO_TOTAL_AMOUNT", payload: prices.bamboPrice });
      if (selectedCard === "card2")
        dispatch({ type: "SUBTRACT_BLACK_EDITION_QUANTITY", payload: 1 });
      dispatch({
        type: "ADD_TO_TOTAL_AMOUNT",
        payload: prices.blackEditionPrice,
      });
    }
  };

  // Handler to select a card (either 'card1' or 'card2')
  const handleCardSelect = (cardId: string) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="btn-close" onClick={handleModal}>
          <Closer />
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
              <div className="input-box">
                <input
                  type="radio"
                  name="pledge"
                  className="input-title"
                  checked={selectedCard === "card0"}
                  onChange={() => handleCardSelect("card0")}
                />{" "}
                <label className="label-no-reward">Pledge with no reward</label>
              </div>
            </div>
            <p className="txt">
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
              <div className="input-box">
                <input
                  type="radio"
                  name="pledge"
                  className="input-title"
                  checked={selectedCard === "card1"}
                  onChange={() => handleCardSelect("card1")}
                />{" "}
                <div>
                  {" "}
                  <label> Bamboo Stand</label> <p>Pledge $25 or more</p>
                </div>
              </div>{" "}
              <div className="modalLeft">
                {" "}
                <h4>{bambooStandQuantity}</h4>
                <p>left</p>
              </div>
            </div>
            <p className="txt">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div className="modalbottom">
              {" "}
              <h4>{bambooStandQuantity}</h4>
              <p>left</p>
            </div>

            {selectedCard === "card1" && (
              <div className="pledge-box">
                <p>Enter your pledge</p>{" "}
                <div className="price-select">
                  <form onSubmit={handleSumbmit}>
                    {" "}
                    <div
                      className={`input-price ${error ? "input-error" : ""}`}
                    >
                      <p>$</p>
                      <input
                        type="number"
                        value={prices.bamboPrice}
                        onChange={handleChange}
                      />
                    </div>{" "}
                    <button>Continue</button>
                  </form>
                </div>
              </div>
            )}
            {selectedCard === "card1"
              ? error && <p className="error">*{error}</p>
              : ""}
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
              <div className="input-box">
                <input
                  type="radio"
                  name="pledge"
                  className="input-title"
                  checked={selectedCard === "card2"}
                  onChange={() => handleCardSelect("card2")}
                />{" "}
                <div>
                  <label>Black Edition Stand</label>
                  <p>Pledge $75 or more</p>
                </div>
              </div>{" "}
              <div className="modalLeft">
                {" "}
                <h4>{blackEditionQuantity}</h4>
                <p>left</p>
              </div>
            </div>

            <p className="txt">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>

            <div className="modalbottom">
              {" "}
              <h4>{blackEditionQuantity}</h4>
              <p>left</p>
            </div>
            {selectedCard === "card2" && (
              <div className="pledge-box">
                <p>Enter your pledge</p>{" "}
                <div className="price-select">
                  <form onSubmit={handleSumbmit}>
                    {" "}
                    <div
                      className={`input-price ${error ? "input-error" : ""}`}
                    >
                      <p>$</p>
                      <input
                        type="number"
                        value={prices.blackEditionPrice}
                        onChange={handleChange}
                      />
                    </div>{" "}
                    <button>Continue</button>
                  </form>
                </div>
              </div>
            )}
            {selectedCard === "card2"
              ? error && <p className="error">*{error}</p>
              : ""}
          </div>

          <div className="modal-card-selected">
            <div className="modal-selected">
              <div className="input-box-selected">
                <input
                  className="input-title-selected"
                  type="radio"
                  name="pledge"
                />{" "}
                <div>
                  {" "}
                  <label>Mahogany Special Edition</label>
                  <p>Pledge $200 or more</p>{" "}
                </div>
              </div>{" "}
              <div className="modalLeft-selected">
                {" "}
                <h4>0</h4>
                <p>left</p>
              </div>
            </div>

            <p className="txt-selected">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="modalbottom-selected">
              {" "}
              <h4>0</h4>
              <p>left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
