import TitleComponent from "../titleComponent/TitleComponent";
import CounterComponent from "../counterComponent/CounterComponent";
import ProjectComponent from "../projectComponent/ProjectComponent";

export interface Mainprops {
  handleModal: () => void;
}

function Main({ handleModal }: Mainprops) {
  return (
    <div className="main">
      <div className="container-component">
        <TitleComponent handleModal={handleModal} />
        <CounterComponent />
        <ProjectComponent handleModal={handleModal} />
      </div>
      <div></div>
    </div>
  );
}

export default Main;
