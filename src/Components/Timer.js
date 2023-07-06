import React from "react";
import { Link } from "react-router-dom";

function Timer({ time }) {
  return (
    <div className="timer">
      <h1>{time}</h1>
      <img
        className="character minion"
        src={`${process.env.PUBLIC_URL}/assets/minion.png`}
        alt="minion"
      />
      <img
        className="character batman"
        src={`${process.env.PUBLIC_URL}/assets/batman.png`}
        alt="batman"
      />
      <img
        className="character link"
        src={`${process.env.PUBLIC_URL}/assets/link.jpg`}
        alt="link"
      />
      <Link to="/">Back</Link>
    </div>
  );
}

export default Timer;
