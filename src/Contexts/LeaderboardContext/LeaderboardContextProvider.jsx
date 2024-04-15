import { useState } from "react";
import { LeaderboardContext } from "Contexts/LeaderboardContext";

export const LeaderboardContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: null,
    difficulty: null,
    size: null,
  });

  return (
    <LeaderboardContext.Provider value={{ data, setData }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
