import React from "react";
import IconCheck from "../../styles/images/icon-check.svg";

export interface ConfirmModalprops {
  handleConfirm: () => void;
}

function ConfirmModal({ handleConfirm }: ConfirmModalprops) {
  return (
    <div className="confirm-modal-container">
      <div className="confirm-modal">
        <img src={IconCheck} alt="icon-check" />
        <h2> Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={handleConfirm}>Got it!</button>
      </div>
    </div>
  );
}

export default ConfirmModal;
