import React from "react";
import { useAppState } from "../../appContext/AppContext";

function CounterComponent() {
  const { state } = useAppState();
  const { totalAmount, totalBackers } = state;
  const goal: number = 100000;

 

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

 const formatNumber = (number : number):string => {
 return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
 }


  return (
    <div className="container-goal">
      <div className="goal-collect-box">
        <div className="collect">
          <h2>${formatNumber(totalAmount)}</h2>
          <p>of ${formatNumber(goal)} backed</p>
          <span className="line"></span>
        </div>
        <div className="backers-box">
          <h2>{formatNumber(totalBackers)}</h2>
          <p>totals backers</p>
          <span className="line"></span>
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
