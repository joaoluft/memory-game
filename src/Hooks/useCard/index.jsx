import { useEffect, useState } from "react";
import { findCardById } from "src/utils";

export const useCard = (id, selectCardHandler) => {
  const [card, setCard] = useState({
    id: null,
    name: null,
    image: null,
  });

  const cardClickHandler = (id) => {
    findCardById(id)
      .then((res) => {
        selectCardHandler(res)
        setCard(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return [card, cardClickHandler];
};
