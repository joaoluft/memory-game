import { useEffect, useState } from "react";
import { findCardById } from "src/utils";

export const useCard = (play, setPlay, position, remove, setMatch) => {
  const [card, setCard] = useState({
    id: null,
    name: null,
    image: null,
  });

  const [flipped, setFlipped] = useState(false);

  const validateCards = (cards) => {
    if (cards.length !== 2) return;

    setMatch(prevMatch => ({...prevMatch, moves: prevMatch.moves + 1}))
    console.log("render")

    const correct = cards[0].id === cards[1].id;

    setFlipped(false);

    if (correct) {
      remove(cards[0].id);
      setMatch(prevMatch => ({...prevMatch, points: prevMatch.points + 100 / prevMatch.size}))
    }

    setPlay((prevPlay) => ({
      ...prevPlay,
      cards: [],
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      validateCards(play.cards);
    }, 1500);
  }, [play.cards]);

  const cardClickHandler = (id) => {
    findCardById(id)
      .then((res) => {
        if (play.cards.length >= 2) return;
        setPlay((prevPlay) => ({
          ...prevPlay,
          cards: [...prevPlay.cards, res],
        }));
        setCard(res);
        setFlipped(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return [flipped, card, cardClickHandler];
};
