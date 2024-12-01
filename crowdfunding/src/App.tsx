import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";
import { AppProdiver } from "./appContext/AppContext";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleModal =()=>{
    setOpenModal(!openModal);
  }
  return (
    <div className="App">
      <Header />
      <AppProdiver> <Main handleModal={handleModal} />
      {openModal &&  <Modal  handleModal={handleModal} /> }</AppProdiver>
     
    </div>
  );
}

export default App;
