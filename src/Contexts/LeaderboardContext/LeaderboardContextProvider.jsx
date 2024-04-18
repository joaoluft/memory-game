import { useState } from "react";
import { LeaderboardContext } from "Contexts/LeaderboardContext";

export const LeaderboardContextProvider = ({ children }) => {
  const [leader, setLeader] = useState([]);

  return (
    <LeaderboardContext.Provider value={{ leader, setLeader }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
