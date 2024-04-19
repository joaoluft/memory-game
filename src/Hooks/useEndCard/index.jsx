import { useEffect } from "react";
import endSound from "Assets/Sounds/end.mp3";
import { useSound } from "Hooks/useSound";

export const useEndCard = () => {
  const playSound = useSound(endSound);

  useEffect(() => {
    playSound();
  }, []);
};
