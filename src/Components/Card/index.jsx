import { StyledCard, StyledFront, StyledBack } from "Components/Card/styles";
import { useCard } from "Hooks/useCard";
import backCard from "Assets/Cards/back.png";

export const Card = ({ id, position, play, setPlay, visible, remove }) => {
  const [flipped, card, cardClickHandler] = useCard(
    play,
    setPlay,
    position,
    remove
  );

  return (
    <StyledCard
      $visible={visible}
      $flipped={flipped}
      onClick={() => cardClickHandler(id)}
    >
      <StyledFront $image={card.image} />
      <StyledBack $image={backCard} />
    </StyledCard>
  );
};
