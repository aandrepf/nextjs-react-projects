import { useState } from "react";
import { Modal } from "./Modal";
import { Backdrop } from "./Backdrop";

export function Todo({ text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleDeleteTodo() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          onModalCancel={handleCloseModal}
          onModalConfirm={handleCloseModal}
        />
      )}
      {modalIsOpen && <Backdrop onBackdropCancel={handleCloseModal} />}
    </div>
  );
}
