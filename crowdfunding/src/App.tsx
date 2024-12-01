import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleModal =()=>{
    setOpenModal(!openModal);
  }
  return (
    <div className="App">
      <Header />
      <Main handleModal={handleModal} />
     {openModal &&  <Modal  handleModal={handleModal} /> }
    </div>
  );
}

export default App;
