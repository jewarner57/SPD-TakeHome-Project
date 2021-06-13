import React, { useState } from 'react';
import './MoodForm.css'

function MoodForm(props) {
  const moodList = ["happy", "neutral", "sad", "silly", "chill", "angry"]

  return (
    <div className="MoodForm">
      <p className="moodFormTitle">How Are You Feeling?</p>
      {moodList.map((moodItem) => {
        const moodSelected = (props.mood === moodItem ? 'moodSelected' : '')

        return <img
          className={`moodIcon ${moodSelected}`}
          onClick={() => {
            props.setMood(moodItem)
            props.toggle()
          }}
          alt={`${moodItem}`}
          src={process.env.PUBLIC_URL + `/moods/${moodItem}.svg`}
        />
      })}
    </div>
  );
}

export default MoodForm