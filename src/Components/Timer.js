import React from "react";
import { Link } from "react-router-dom";

function Timer({ time }) {
  return (
    <div className="timer">
      <h1>{time}</h1>
      <img
        className="character minion"
        src="https://github.com/sungjinfcc/find-waldo/blob/main/public/assets/minion.png"
        alt="minion"
      />
      <img
        className="character batman"
        src="https://github.com/sungjinfcc/find-waldo/blob/main/public/assets/batman.png"
        alt="batman"
      />
      <img
        className="character link"
        src="https://github.com/sungjinfcc/find-waldo/blob/main/public/assets/link.jpg"
        alt="link"
      />
      <Link to="/">Back</Link>
    </div>
  );
}

export default Timer;
