import { useState, useEffect } from "react";
import { formatTime } from "src/utils";

export const useTimer = (initialSeconds = 0, setEndGame) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(interval);
          setIsActive(false);
          setEndGame(true);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
  };

  return {
    seconds,
    formattedTime: formatTime(seconds),
    isActive,
    toggleTimer,
    resetTimer,
  };
};
