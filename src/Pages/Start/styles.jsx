import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
  animation: ${props => props.theme.animations.fadeIn} 600ms ease-in-out;
`;

export const StyledMainContainer = styled.div`
  width: fit-content;
`

export const StyledParagraph = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.light};
  font-weight: 500;
`

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 20px;
`

export const StyledLogo = styled.img`
  padding-bottom: 24px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const StyledSubTitle = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;
