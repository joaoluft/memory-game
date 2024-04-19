import { useState, useEffect, useContext } from "react";
import { GameContext } from "Contexts/GameContext";
import { useSound } from "Hooks/useSound";
import selectSound from "/Assets/Sounds/select.mp3";

export const useStart = () => {
  const { data, setData } = useContext(GameContext);
  const [disabled, setDisabled] = useState(true);
  const [nameInput, setNameInput] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const playSound = useSound(selectSound);

  const setNameHandler = (e) => {
    playSound();
    setNameInput(e.target.value.trim());
  };

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

  return [
    data,
    setData,
    disabled,
    playSound,
    setNameHandler,
  ];
};
