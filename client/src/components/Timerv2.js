import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Timerv2.css";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #c8e2fb;
`;

const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 50px;
  background: radial-gradient(
    circle at 7.5% 24%,
    rgb(237, 161, 193) 0%,
    rgb(250, 178, 172) 25.5%,
    rgb(190, 228, 210) 62.3%,
    rgb(215, 248, 247) 93.8%
  );
`;

const Timerv2 = ({ initialMinutes, initialSeconds }) => {
  const [time, setTime] = useState({
    m: initialMinutes,
    s: initialSeconds,
  });

  const [timer, setTimer] = useState(null);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, initialSeconds * 10);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(intervalId);
      setProgress(0);
    }
  }, [progress]);

  const startTimer = () => {
    let myInterval = setInterval(() => {
      setTime((time) => {
        const updatedTime = { ...time };
        if (time.s > 0) {
          updatedTime.s--;
        }

        if (time.s === 0) {
          if (time.m === 0) {
            clearInterval(myInterval);
            alert(
              "Game Over! Don't forget to check your Total Score to see how you did. 🎉"
            );
          } else if (time.m > 0) {
            updatedTime.m--;
            updatedTime.s = 59;
          }
        }

        return updatedTime;
      });
    }, 1000);
    setTimer(myInterval);
    setRunning(true);
    setIsShown(false);
  };

  const restartTimer = () => {
    clearInterval(intervalId);
    setRunning(false);
    setProgress(0);
    setTime({
      m: initialMinutes,
      s: initialSeconds,
    });
    setIsShown(true);
  };

  return (
    <div class="container">
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
      <h1 className="timer">
        {time.m === 0 && time.s === 0 ? (
          <>
            <h1 className="flash-red">Game Over!</h1>
            <br />
            <button className="btn-timer" onClick={restartTimer}>
              Play Again
            </button>
          </>
        ) : (
          <h1>
            Time Remaining: {time.m}:{time.s < 10 ? `0${time.s}` : time.s}
          </h1>
        )}
      </h1>
      {isShown && (
        <>
          <button className="btn-timer" onClick={startTimer}>
            Start Timer
          </button>
        </>
      )}
    </div>
  );
};

export default Timerv2;
