import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const StyledOption = styled.span`
  background: ${(props) =>
    props.$selected ? props.theme.colors.aquaGreen : "#ffff"};
  padding: 12px 32px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 300ms;

  ${(props) =>
    props.$type === "size" &&
    css`
      @media (max-width: 768px) {
        overflow: hidden;
        max-width: 4ch;
        white-space: nowrap;
        text-overflow: ellipsis;
      } 
    `}
`;

