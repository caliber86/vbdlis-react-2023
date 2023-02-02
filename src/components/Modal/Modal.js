import React from "react";
import "./Modal.scss";

const Modal = ({ setIsOpen, children }) => {
  return (
    <div className="modalPopup">
      <div className={'darkBG'} onClick={() => setIsOpen(false)} />

      <div className={'centered'}>
        <div className={'modal'}>

          <button className={'closeBtn'} onClick={() => setIsOpen(false)}>
            {'X'}
          </button>

          <div className={'modalContent'}>
            {children}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Modal;