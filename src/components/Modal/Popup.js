import React, { useEffect } from "react";
import "./Popup.scss";

const Popup = ({ setIsOpen, children, ...props }) => {

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <div className="popup-root">
      <div className={'modal-video'}>
        <div className={'modal-video-body'}>
          <div className={'modal-video-inner'} style={{ width:'100%' }}>            
            <div className={props.className}>              
              <button
                className={'close-popup'}
                onClick={() => {
                  document.body.style.overflowY = "scroll";
                  setIsOpen(false)
                }}
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"></path></svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;