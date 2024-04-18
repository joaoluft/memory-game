import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: ${props => props.theme.colors.light};
  padding: 24px;
  border-radius: 24px;
  animation: ${props => props.theme.animations.fadeIn} 600ms ease-in-out;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSizes.xxlarge};
`;

export const StyledSubTitle = styled.h2`
  font-weight: 500;
  margin: 0;
  color:#1f1f1f;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  color:#1f1f1f;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  white-space: nowrap;
  padding-top: 12px;
`