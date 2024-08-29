import React from "react";
import "./Modal.scss";

const Modal = ({ setIsOpen, children }) => {
  return (
    <div className="modal-popup">
      <div className={'dark-bg'} />
      <div className={'centered'}
        onClick={(e) => {
          setIsOpen(false);
          e.stopPropagation();
        }}>
        <div className={'modal'} onClick={(e) => e.stopPropagation()}>
          <button className={'close-btn'} onClick={() => setIsOpen(false)}>
            <svg fill="none" viewBox="0 0 24 24" width="24" height="24"><path fill="#000" d="M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"></path></svg>
          </button>
          <div className={'modal-content'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;