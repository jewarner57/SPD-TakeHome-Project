import React, { useState } from 'react';
import './MoodForm.css'

function MoodForm(props) {
  const [mood, setMood] = useState("")
  const moodList = ["happy", "neutral", "sad", "silly", "chill", "angry"]

  return (
    <div className="MoodForm">
      <p className="moodFormTitle">How Are You Feeling?</p>
      {moodList.map((mood) => {
        return <img className="moodIcon" onClick={() => setMood(mood)} alt={`${mood}`} src={process.env.PUBLIC_URL + `/moods/${mood}.svg`} />
      })}
    </div>
  );
}

export default MoodForm