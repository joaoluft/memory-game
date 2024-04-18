import { useState, useEffect, useContext } from "react";
import { GameContext } from "Contexts/GameContext";

export const useStart = (setStep) => {
  const { data, setData } = useContext(GameContext);
  const [disabled, setDisabled] = useState(true);
  const [nameInput, setNameInput] = useState("");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setData({
      name: null,
      difficulty: null,
      size: null,
    });

    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (nameInput.length <= 0) {
      setDisabled(true);
      setData((prevData) => ({ ...prevData, name: null }));
    } else {
      setData((prevData) => ({ ...prevData, name: nameInput }));
    }
  }, [nameInput]);

  useEffect(() => {
    if (!Object.values(data).some((value) => value === null) && !firstRender)
      setDisabled(false);
  }, [data]);

  const startGameHandler = () => {
    setStep(2);
  };

  return [data, setData, disabled, startGameHandler, setNameInput];
};
