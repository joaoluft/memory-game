import { useEffect, useState } from "react";
import { findCardById } from "src/utils";

export const useCard = (play, setPlay, position, remove) => {
  const [card, setCard] = useState({
    id: null,
    name: null,
    image: null,
  });

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const { attempts, cards } = play;
      if (cards.length != 2) return;

      const correct = cards[0].id === cards[1].id;

      if (correct) {
        console.log("acertou");
        remove(cards[0].id);
      } else {
        setFlipped(false);
      }

      setPlay((prevPlay) => ({
        ...prevPlay,
        cards: [],
      }));
    }, 1500);
  }, [play]);

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
