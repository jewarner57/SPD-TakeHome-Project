import React, { useState } from 'react';
import './MoodForm.css'

function MoodForm(props) {

  return (
    <div className="MoodForm">
      <p className="moodFormTitle">How Are You Feeling?</p>
      <img className="moodIcon" alt='happy' src={process.env.PUBLIC_URL + '/moods/happy.svg'} />
      <img className="moodIcon" alt='neutral' src={process.env.PUBLIC_URL + '/moods/neutral.svg'} />
      <img className="moodIcon" alt='sad' src={process.env.PUBLIC_URL + '/moods/sad.svg'} />
      <img className="moodIcon" alt='happy' src={process.env.PUBLIC_URL + '/moods/happy.svg'} />
    </div>
  );
}

export default MoodForm