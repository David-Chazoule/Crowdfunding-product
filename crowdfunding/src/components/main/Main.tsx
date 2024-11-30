import React from "react";
import TitleComponent from "../titleComponent/TitleComponent";
import CounterComponent from "../counterComponent/CounterComponent";
import CrowdfundingContainer from "../crowdfundingContainer/CrowdfundingContainer";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <TitleComponent />
        <CounterComponent />
        <CrowdfundingContainer />
      </div>
    </div>
  );
}

export default Main;
