import styled from "styled-components";
import BackgroundImage from "/Assets/bg.png"

export const StyledMain = styled.main`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.60);
  background-blend-mode: multiply;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`;
