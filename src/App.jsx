import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "Themes/GlobalStyles";
import { GameContextProvider } from "Contexts/GameContext";
import { LeaderboardContextProvider } from "Contexts/LeaderboardContext";
import { theme } from "Themes/theme";
import { StyledMain } from "Components/Container";
import { useApp } from "Hooks/useApp";

export const App = () => {
  const [renderStep] = useApp();

  return (
    <ThemeProvider theme={theme}>
      <GameContextProvider>
        <LeaderboardContextProvider>
          <GlobalStyles />
          <StyledMain>{renderStep()}</StyledMain>
        </LeaderboardContextProvider>
      </GameContextProvider>
    </ThemeProvider>
  );
};
