import React, { useState } from 'react';
import './Modal.css'

function Modal(props) {
  const { toggle, weather, mood } = props

  return (
    <div className="Modal" onClick={() => { toggle() }}>
      <div className="modalBackground"></div>
      <div className="modalContent">
        <div>

        </div>
      </div>
    </div>
  );
}

export default Modal