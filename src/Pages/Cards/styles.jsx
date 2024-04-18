import styled from "styled-components";

export const StyledContainer = styled.section`
  min-height: 100vh;
  animation: ${(props) => props.theme.animations.fadeIn} 600ms ease-in-out;
`;

export const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledCardsContainer = styled.div`
  margin-top: 2.5%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  max-width: 80%;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

export const StyledPoints = styled.span`
  color: #fff;
  font-weight: 800;
  padding-right: 42px;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
`;

export const StyledTimerContainer = styled.div`
  padding-left: 32px;
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
`;

export const StyledUserName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  color: ${(props) => props.theme.colors.light};
  font-weight: 500;
`;
