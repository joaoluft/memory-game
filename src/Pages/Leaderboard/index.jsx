import {
  StyledContainer,
  StyledTitle,
  StyledTable,
  StyledBackButton,
  StyledSection,
  StyledNotFound,
  StyledContentContainer,
  StyledNotFoundContainer,
  StyledHeaderContainer,
  StyledTableContainer,
} from "Pages/Leaderboard/styles";
import { Button } from "Components/Button";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { LeaderboardContext } from "Contexts/LeaderboardContext";
import { useContext } from "react";
import { difficulties } from "Constants/data";
import { formatTime } from "src/utils";

export const Leaderboard = ({ setStep }) => {
  const { leader } = useContext(LeaderboardContext);

  const sortedLeader = leader.sort((a, b) => {
    if (a.time === b.time) {
      return b.points - a.points;
    }

    return a.time - b.time;
  });

  const renderLeaders = () => {
    return sortedLeader.map((match, index) => (
      <tr key={match.id}>
        <td>#{index + 1}</td>
        <td>{match.name}</td>
        <td>{formatTime(match.time)}</td>
        <td>{match.points}</td>
        <td>{match.moves}</td>
        <td>{match.errors}</td>
        <td>{difficulties.find((diff) => diff.id === match.difficulty).raw}</td>
        <td>{match.size}</td>
      </tr>
    ));
  };

  return (
    <StyledSection>
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledBackButton onClick={() => setStep(1)}>
            <IoArrowBackOutline size={20} />
            <span>Voltar</span>
          </StyledBackButton>
          <StyledTitle>Placar de Líderes</StyledTitle>
        </StyledHeaderContainer>
        <StyledContentContainer>
          {leader.length > 0 ? (
            <StyledTableContainer>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Lugar</th>
                    <th>Jogador</th>
                    <th>Tempo</th>
                    <th>Pontos</th>
                    <th>Movimentos</th>
                    <th>Erros</th>
                    <th>Dificuldade</th>
                    <th>Cartas</th>
                  </tr>
                </thead>
                <tbody>{renderLeaders()}</tbody>
              </StyledTable>
            </StyledTableContainer>
          ) : (
            <StyledNotFoundContainer>
              <StyledNotFound>Nenhuma partida encontrada!</StyledNotFound>
              <Button
                color="purple"
                fontColor="light"
                onClick={() => setStep(1)}
              >
                <FaPlay />
                <span>Jogar uma partida</span>
              </Button>
            </StyledNotFoundContainer>
          )}
        </StyledContentContainer>
      </StyledContainer>
    </StyledSection>
  );
};
