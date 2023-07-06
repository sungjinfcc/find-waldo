import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

function Game({ addRecord }) {
  const imageUrl = `${process.env.PUBLIC_URL}/assets/background.png`;
  const navigate = useNavigate();
  const [startTime] = useState(new Date().getTime());
  const [currentTime, setCurrentTime] = useState(null);
  const [numFound, setNumFound] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [charInfo, setCharInfo] = useState([
    {
      name: "minion",
      startX: 0.9431,
      endX: 0.9556,
      startY: 0.7534,
      endY: 0.7595,
      isChecked: false,
    },
    {
      name: "link",
      startX: 0.2234,
      endX: 0.2467,
      startY: 0.9504,
      endY: 0.9598,
      isChecked: false,
    },
    {
      name: "batman",
      startX: 0.0947,
      endX: 0.1357,
      startY: 0.6731,
      endY: 0.6804,
      isChecked: false,
    },
  ]);

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now - startTime);
    }, 1000);

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (numFound >= 3) {
      endGame();
    }
  }, [numFound]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const imageRect = imageRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const { top: imageTop, left: imageLeft } = imageRect;
    const x = (clientX - imageLeft) / containerWidth;
    const y = (clientY - imageTop) / containerHeight;

    let correctGuess = false;

    setCharInfo(
      charInfo.map((char) => {
        if (
          x >= char.startX &&
          x <= char.endX &&
          y >= char.startY &&
          y <= char.endY &&
          !char.isChecked
        ) {
          drawMark(
            char.startX * containerWidth,
            char.startY * containerHeight,
            char.name
          );
          setNumFound((prev) => prev + 1);
          correctGuess = true;
          return {
            ...char,
            isChecked: true,
          };
        }
        return char;
      })
    );

    if (!correctGuess) {
      showModalWrong();
    }
  };

  const drawMark = (x, y, id) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = id;
    circle.style.left = `${x - 20}px`;
    circle.style.top = `${y - 20}px`;
    const container = document.querySelector(".image-container");
    container.appendChild(circle);
  };

  const formatTime = (data) => {
    const minutes = Math.floor(data / 60000);
    const seconds = Math.floor((data % 60000) / 1000);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const endGame = () => {
    clearInterval(intervalId);
    setNumFound(0);
    setCharInfo(
      charInfo.map((char) => {
        return {
          ...char,
          isChecked: false,
        };
      })
    );
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.add("active");
    overlay.classList.add("active");
  };
  const showModalWrong = () => {
    const modal = document.querySelector(".wrong");
    modal.classList.add("active");
  };
  const closwModalWrong = () => {
    const modal = document.querySelector(".wrong");
    modal.classList.remove("active");
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    navigate("/");
  };

  return (
    <div ref={containerRef} className="game">
      <Timer time={formatTime(currentTime)} />
      <div
        className="image-container"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={() => {}}
      >
        <img
          ref={imageRef}
          className="game-image"
          src={imageUrl}
          alt="Background"
        />
      </div>
      <div className="modal">
        <form>
          <p>Congratulations!</p>
          <input type="text" placeholder="Input your name" />
          <p>Record : {formatTime(currentTime)}</p>
          <button
            type="button"
            onClick={(e) => {
              addRecord(
                e.target.parentNode.children[1].value,
                formatTime(currentTime)
              );
              closeModal();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="modal wrong">
        <p>That&apos;s not the one we are looking for!</p>
        <button type="button" onClick={closwModalWrong}>
          OK
        </button>
      </div>
      <div
        className="overlay"
        role="button"
        tabIndex={0}
        onClick={closeModal}
        onKeyDown={() => {}}
      >
        overlay
      </div>
    </div>
  );
}

export default Game;
