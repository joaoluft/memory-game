import { useState } from "react";
import { GameContext } from "Contexts/GameContext";

export const GameContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: null,
    difficulty: null,
    size: null,
  });

  return (
    <GameContext.Provider value={{ data, setData }}>
      {children}
    </GameContext.Provider>
  );
};
