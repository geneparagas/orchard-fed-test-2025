import React from "react";

const Modal = ({ image, onClose }) => (
  <div className="modal" onClick={onClose}>
    <img src={image} alt="Modal" />
  </div>
);

export default Modal;