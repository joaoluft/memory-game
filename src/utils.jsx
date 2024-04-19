import { cards as cardsList } from "Constants/data";

export const findCardById = async (id) => {
  try {
    const card = cardsList.find((card) => card.id === id);
    const path = `/Assets/Cards/${card.name}.png`;
    const image = await import(/* @vite-ignore */ path);
    return { ...card, image: image.default };
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const getCards = async () => {
  try {
    return cardsList.map((card) => {
      return { id: card.id };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
