import { useEffect, useRef, useState } from "react";

export const usePlay = (cards, setStep) => {
  const [play, setPlay] = useState({
    cards: [],
  });

  const [endGame, setEndGame] = useState(false);

  const corrects = useRef([]);

  useEffect(() => {
    const end = cards.every((card) =>
      corrects.current.some((correct) => correct === card.id)
    );

    setEndGame(end);

    if (end) setStep(2);
  }, [corrects.current, cards]);

  return [play, setPlay, corrects, endGame];
};
