import React, { useState } from 'react';
import './Modal.css'

function Modal(props) {
  const { toggle, icon, mood } = props

  return (
    <div className="Modal" onClick={() => { toggle() }}>
      <div className="modalBackground"></div>
      <div className="modalContent">
        <div className="modalIcon">
          <img alt="weather icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </div>
        <div className="modalIcon">
          <img
            className={`moodIcon`}
            alt={`${mood}`}
            src={process.env.PUBLIC_URL + `/moods/${mood}.svg`}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal