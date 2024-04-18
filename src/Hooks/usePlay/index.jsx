import { useContext, useEffect, useRef, useState } from "react";
import { LeaderboardContext } from "Contexts/LeaderboardContext";
import { GameContext } from "Contexts/GameContext";

export const usePlay = (match, cards, setStep) => {
  const { setLeader } = useContext(LeaderboardContext);
  const { data } = useContext(GameContext);
  const [play, setPlay] = useState({
    cards: [],
  });

  const [endGame, setEndGame] = useState(false);

  const corrects = useRef([]);

  useEffect(() => {
    const end = cards.every((card) =>
      corrects.current.some((correct) => correct === card.id)
    );

    if (end) {
      if (match.id == null) return;
      setLeader((prevLeader) => [
        ...prevLeader,
        {
          ...match,
          name: data.name,
          difficulty: data.difficulty,
        },
      ]);
    }

    setEndGame(end);

    if (end) setStep(2);
  }, [corrects.current, cards]);

  return [play, setPlay, corrects, endGame, setEndGame];
};
