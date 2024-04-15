import { useContext, useEffect, useState } from "react";
import { GameContext } from "Contexts/GameContext";
import { getCards } from "src/utils";
import { Card } from "Components/Card";
import { usePlay } from "Hooks/usePlay";
import { EndCard } from "Components/EndCard";

export const useCards = (setStep) => {
  const [cards, setCards] = useState([]);
  const { data } = useContext(GameContext);
  const [play, setPlay, corrects, endGame] = usePlay(cards, setStep);
  const [match, setMatch] = useState({
    id: null,
    player: null,
    moves: 0,
    errors: 0,
    points: 0,
    time: 300,
    size: data.size
  });

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
      { id: card.id, visible: card.visible, position: 1 },
      { id: card.id, visible: card.visible, position: 2 },
    ]);

    // Embaralhando novamente
    maskedCards = shuffleCards(maskedCards);

    setCards(maskedCards);
  };

  useEffect(() => {
    getCards()
      .then((res) => {
        randomizeDoubleCards(res, data.size);
      })
      .catch((err) => {
        console.error(err);
      });
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

  const renderCards = () => {
    return ( !endGame ? cards.map((card, index) => (
      <Card
        play={play}
        setPlay={setPlay}
        position={card.position}
        visible={card.visible}
        remove={removeCard}
        key={index}
        id={card.id}
        setMatch={setMatch}
      />
    )) : (
      <EndCard setStep={setStep} data={match} />
    ));
  };

  return [renderCards];
};
