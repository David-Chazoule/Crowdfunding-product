import React from "react";

function CounterComponent() {
  return (
    <div>
      <div className="goal-collect-box">
        <div className="collect">
          <h3>$80000</h3>
          <p>of $100 000 backed</p>
        </div>
        <div className="backers-box">
          <h3>5,007</h3>
          <p>totals backers</p>
        </div>
        <div className="daysLelf-box">
          <h3>56</h3>
          <p>days left</p>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default CounterComponent;
