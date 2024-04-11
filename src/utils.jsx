import { cards as cardsList } from "Constants/data";

export const findCardById = async (id) => {
  try {
    const card = cardsList.find((card) => card.id === id);
    const path = `./Assets/Cards/${card.name}.png`;
    const image = await import(path);
    return { ...card, image: image.default };
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const getCards = async () => {
  try {
    return cardsList.map((card) => {
      return {id: card.id}
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};
