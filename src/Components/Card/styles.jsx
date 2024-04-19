import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  cursor: ${({ $visible }) => ($visible ? "pointer" : "unset")};
  width: 230px;
  height: 320px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 500ms, opacity 1000ms;

  ${({ $visible }) =>
    !$visible &&
    css`
      opacity: 0.5;
    `}

  ${({ $flipped }) =>
    (!$flipped &&
      css`
        animation: ${(props) => props.theme.animations.flipOut} 1s forwards;
      `) ||
    ($flipped &&
      css`
        animation: ${(props) => props.theme.animations.flipIn} 1s forwards;
      `)}

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    transform: scale(0.8);
    width: 184px; /* ajuste o tamanho do card para caber melhor em dispositivos móveis */
    height: 256px;
  }
`;

const StyledFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
`;

export const StyledFront = styled(StyledFace)`
  background-image: url(${({ $image }) => $image});
  transform: rotateY(180deg);
`;

export const StyledBack = styled(StyledFace)`
  background-image: url(${({ $image }) => $image});
`;