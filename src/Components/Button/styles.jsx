import styled from "styled-components"

export const StyledButton = styled.button`
  outline: none;
  border-radius: 50px;
  border: none;
  background: ${props => props.theme.colors.aquaGreen};
  padding: 16px 42px;
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 12px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
  color: #3f3f3f;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  transition: background 300ms, color 300ms;

  &:disabled {
    background: #cfcfcf;
    color: #5f5f5f;
    cursor: not-allowed;
  }
`