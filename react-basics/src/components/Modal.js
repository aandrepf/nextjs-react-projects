export function Modal({ onModalCancel, onModalConfirm }) {
  function handleCancel() {
    onModalCancel();
  }

  function handleConfirm() {
    onModalConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
}
