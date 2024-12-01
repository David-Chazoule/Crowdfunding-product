import React from "react";
import { useAppState } from "../../appContext/AppContext";

function CounterComponent() {
  const {state}= useAppState();
  const {totalAmount, totalBackers} = state;
  return (
    <div className="container-goal">
      <div className="goal-collect-box">
        <div className="collect">
          <h2>${totalAmount}</h2>
          <p>of $100 000 backed</p>
        </div>
        <div className="backers-box">
          <h2>{totalBackers}</h2>
          <p>totals backers</p>
        </div>
        <div className="daysleft">
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>

      <div className="progress-bar-box">
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;
