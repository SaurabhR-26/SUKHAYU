import React from "react";

import "./Modal.css";

export const Modal = ({closeModal}) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
    

      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
        
        </div>
      </div>
    </div>
  );
};
