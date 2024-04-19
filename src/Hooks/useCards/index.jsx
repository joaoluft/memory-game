import { useContext, useEffect, useState } from "react";
import { GameContext } from "Contexts/GameContext";
import { getCards } from "src/utils";
import { Card } from "Components/Card";
import { usePlay } from "Hooks/usePlay";
import { EndCard } from "Components/EndCard";
import { useTimer } from "Hooks/useTimer";
import { v4 as uuidv4 } from "uuid";
import { useSound } from "Hooks/useSound";
import startSound from "/Assets/Sounds/start.mp3";

export const useCards = (setStep) => {
  const [cards, setCards] = useState([]);
  const { data } = useContext(GameContext);
  const playSound = useSound(startSound);

  const getTimeByDifficulty = (diff) => {
    switch (diff) {
      case "easy":
        return 600;
        break;
      case "medium":
        return 300;
        break;
      case "hardcore":
        return 150;
        break;
      default:
        return 600;
    }
  };

  const [match, setMatch] = useState({
    id: null,
    player: null,
    moves: 0,
    errors: 0,
    points: 0,
    time: getTimeByDifficulty(data.difficulty),
    size: data.size,
  });

  const [play, setPlay, corrects, endGame, setEndGame] = usePlay(
    match,
    cards,
    setStep
  );

  const { formattedTime, seconds, formatTime } = useTimer(
    match.time,
    setEndGame
  );

  const shuffleCards = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  };

  const randomizeDoubleCards = (cards, size) => {
    let maskedCards = [];

    maskedCards = cards.map((card) => {
      return { id: card.id, name: card.name, visible: true };
    });

    // Embaralhando
    maskedCards = shuffleCards(maskedCards);

    // Limitando
    maskedCards = maskedCards.slice(0, size);

    // Criando duplas
    maskedCards = maskedCards.flatMap((card) => [
      {
        id: card.id,
        renderIdentifier: uuidv4(),
        visible: card.visible,
        position: 1,
      },
      {
        id: card.id,
        renderIdentifier: uuidv4(),
        visible: card.visible,
        position: 2,
      },
    ]);

    // Embaralhando novamente
    maskedCards = shuffleCards(maskedCards);

    setCards(maskedCards);
  };

  useEffect(() => {
    playSound();
    getCards()
      .then((res) => {
        randomizeDoubleCards(res, data.size);
      })
      .catch((err) => {
        console.error(err);
      });

    setMatch((prevMatch) => ({
      ...prevMatch,
      id: uuidv4(),
    }));
  }, []);

  const removeCard = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, visible: false };
        }
        return card;
      })
    );

    if (!corrects.current.includes(id)) {
      corrects.current = [...corrects.current, id];
    }
  };

  const validateCards = (selected) => {
    setMatch((prevMatch) => ({ ...prevMatch, moves: prevMatch.moves + 1 }));

    const correct = selected[0].id === selected[1].id;

    if (correct) {
      removeCard(selected[0].id);
      setMatch((prevMatch) => ({
        ...prevMatch,
        points: Math.max(0, prevMatch.points + 100),
      }));
    } else {
      setMatch((prevMatch) => ({
        ...prevMatch,
        errors: prevMatch.errors + 1,
        points: Math.max(0, prevMatch.points - 20),
      }));
    }

    setPlay((prevPlay) => ({
      ...prevPlay,
      cards: [],
    }));

    setMatch((prevMatch) => ({
      ...prevMatch,
      time: Math.max(0, getTimeByDifficulty(data.difficulty) - seconds),
    }));
  };

  useEffect(() => {
    if (play.cards.length !== 2) return;
    setTimeout(() => {
      validateCards(play.cards);
    }, 1500);
  }, [play.cards]);

  const selectCardHandler = (card) => {
    if (play.cards.length === 2) return;
    setPlay((prevPlay) => ({
      ...prevPlay,
      cards: [...prevPlay.cards, card],
    }));
  };

  const renderCards = () => {
    return !endGame ? (
      cards.map((card) => (
        <Card
          flipped={play.cards.some(
            (target) =>
              target.id === card.id &&
              target.position &&
              target.position === card.position
          )}
          visible={card.visible}
          key={card.renderIdentifier}
          id={card.id}
          corrects={corrects}
          selectCardHandler={() => selectCardHandler(card)}
        />
      ))
    ) : (
      <EndCard formatTime={formatTime} setStep={setStep} data={match} />
    );
  };

  return [renderCards, match, endGame, formattedTime, data];
};
