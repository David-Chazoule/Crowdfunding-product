import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";
import { AppProdiver } from "./appContext/AppContext";
import ConfirmModal from "./components/confirmModal/ConfirmModal";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [validModal, setValidModal] = useState<boolean>(false);

  const handleConfirm = () => {
    setValidModal(!validModal);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <Header />
      <AppProdiver>
        {" "}
        <Main handleModal={handleModal} />
        {openModal && (
          <Modal handleModal={handleModal} handleConfirm={handleConfirm} />
        )}
        {validModal && <ConfirmModal handleConfirm={handleConfirm} />}
      </AppProdiver>
    </div>
  );
}

export default App;
