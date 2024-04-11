import { useEffect, useState } from "react";

export const usePlay = () => {
  const [play, setPlay] = useState({
    attempts: 0,
    cards: []
  });

  useEffect(() => {
    console.log(play);
  }, [play]);

  return [play, setPlay]
}