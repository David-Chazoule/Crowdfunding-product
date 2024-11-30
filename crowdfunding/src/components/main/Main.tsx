import React from "react";
import TitleComponent from "../titleComponent/TitleComponent";
import CounterComponent from "../counterComponent/CounterComponent";
import ProjectComponent from "../projectComponent/ProjectComponent";

function Main() {
  return (
    <div className="main">
      <div className="container-component">
        <TitleComponent />
        <CounterComponent />
        <ProjectComponent/>
      </div>
    </div>
  );
}

export default Main;
