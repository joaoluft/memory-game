import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  animation: ${(props) => props.theme.animations.fadeIn} 600ms ease-in-out;
`;

export const StyledNotFound = styled.h1`
  text-align: center;
  margin: 0;
`;

export const StyledNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 48px;
`;

export const StyledContainer = styled.div`
  background: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  border-radius: 16px;
  min-height: 20vw;
  max-height: 20vw;
  min-width: 50%;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin: 0 24px;
    min-height: 80vw;
    max-height: 80vw;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledBackButton = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  color: #ffff;
  background-color: ${(props) => props.theme.colors.blue};
  border: 0;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 72px;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const StyledTable = styled.table`
  padding-top: 32px;
  border-radius: 16px;

  tr {
    text-align: center;
    color: #ffff;
  }

  th {
    background: ${(props) => props.theme.colors.purple};
    padding: 12px 24px;
    border-radius: 12px 12px 0 0;
  }

  td {
    background: #bebebe;
    padding: 12px;
    color: ${(props) => props.theme.colors.dark};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const StyledTableContainer = styled.div`
  overflow-x: auto;
`
