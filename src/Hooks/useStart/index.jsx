import { useState, useEffect, useContext } from "react";
import { GameContext } from "Contexts/GameContext";

export const useStart = (setStep) => {
  const { data, setData } = useContext(GameContext);
  const [disabled, setDisabled] = useState(true);

  const userNameHandler = (e) => {
    setData((prevData) => ({ ...prevData, name: e.target.value }));
  };

  useEffect(() => {
    if (!Object.values(data).some((value) => value === null))
      setDisabled(false);
  }, [data]);

  const startGameHandler = () => {
    setStep(2);
  };

  return [data, setData, disabled, userNameHandler, startGameHandler];
};
