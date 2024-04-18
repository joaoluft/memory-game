import { useState } from "react";
import { findCardById } from "src/utils";

export const useCard = (selectCardHandler, corrects) => {
  const [card, setCard] = useState({
    id: null,
    name: null,
    image: null,
  });

  const cardClickHandler = (id) => {
    if (corrects.current.some((card) => card === id)) return;

    findCardById(id)
      .then((res) => {
        selectCardHandler(res);
        setCard(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return [card, cardClickHandler];
};
