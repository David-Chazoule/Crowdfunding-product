import React from "react";
import { useAppState } from "../../appContext/AppContext";

function CounterComponent() {
  const { state } = useAppState();
  const { totalAmount, totalBackers } = state;
  const goal: number = 100000;

  let progress = Math.round((totalAmount / goal) * 100);

  const progression = () => {
    let result: number = 0;
    if (totalAmount >= goal) {
      result = 100;
    } else {
      let styleProgress = Math.round((totalAmount / goal) * 100);
      result = styleProgress;
    }

    return result;
  };

  console.log(progress);
  return (
    <div className="container-goal">
      <div className="goal-collect-box">
        <div className="collect">
          <h2>${totalAmount}</h2>
          <p>of ${goal} backed</p>
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
          <div
            className="progress"
            style={{ width: `${progression()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;
