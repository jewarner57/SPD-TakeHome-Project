import React, { useState } from 'react';
import './MoodForm.css'

function MoodForm(props) {
  const [mood, setMood] = useState("")
  const moodList = ["happy", "neutral", "sad", "silly", "chill", "angry"]

  return (
    <div className="MoodForm">
      <p className="moodFormTitle">How Are You Feeling?</p>
      {moodList.map((moodItem) => {
        return <img
          className={`moodIcon ${mood === moodItem ? 'moodSelected' : ''}`}
          onClick={() => setMood(moodItem)}
          alt={`${moodItem}`}
          src={process.env.PUBLIC_URL + `/moods/${moodItem}.svg`}
        />
      })}
    </div>
  );
}

export default MoodForm