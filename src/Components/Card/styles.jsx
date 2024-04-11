import styled, { keyframes, css } from "styled-components";

const flipInAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const flipOutAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

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
      opacity: 0;
    `}

  ${({ $flipped }) =>
    (!$flipped &&
      css`
        animation: ${flipOutAnimation} 1s forwards;
      `) ||
    ($flipped &&
      css`
        animation: ${flipInAnimation} 1s forwards;
      `)}

  &:hover {
    transform: scale(1.02);
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
