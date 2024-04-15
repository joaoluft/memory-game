import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "Themes/GlobalStyles";
import { GameContextProvider } from "Contexts/GameContext";
import { theme } from "Themes/theme";
import { StyledMain } from "Components/Container";
import { useApp } from "Hooks/useApp";

export const App = () => {
  const [renderStep] = useApp();

  return (
    <ThemeProvider theme={theme}>
      <GameContextProvider>
        <GlobalStyles />
        <StyledMain>
          {renderStep()}
        </StyledMain>
      </GameContextProvider>
    </ThemeProvider>
  );
};
