import { StyledOption, StyledContainer } from "Components/Start/Selector/styles"
import { useEffect } from "react";

export const Selector = ({ itens, current, setOption, type }) => {

  const selectOptionHandler = (id) => {
    setOption(prevData => ({...prevData, [type]: id}))
  };

  const renderOptions = () => {
    return itens.map((item) => (
      <StyledOption
        onClick={() => selectOptionHandler(item.id)}
        key={item.id}
        $selected={item.id === current}
        $type={type}
      >
        {item.raw}
      </StyledOption>
    ));
  };

  return <StyledContainer>{renderOptions()}</StyledContainer>
};