import { useContext, useEffect, useState } from "react";
import { GameContext } from "Contexts/GameContext";
import { getCards } from "src/utils";
import { Card } from "Components/Card";
import { usePlay } from "Hooks/usePlay";

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const { data } = useContext(GameContext);
  const [play, setPlay] = usePlay();

  // Remover (Simulação de persistencia de dados)
  data.size = 6;

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
  };

  const renderCards = () => {
    return cards.map((card, index) => (
      <Card
        play={play}
        setPlay={setPlay}
        position={card.position}
        visible={card.visible}
        remove={removeCard}
        key={index}
        id={card.id}
      />
    ));
  };

  return [renderCards];
};
