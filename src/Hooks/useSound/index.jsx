import { useState, useEffect } from 'react';

export const useSound = (soundUrl) => {
  const [audio] = useState(new Audio(soundUrl));

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    audio.src = soundUrl;

    return () => {
      audio.pause();
    };
  }, [audio, soundUrl]);

  return playSound;
};