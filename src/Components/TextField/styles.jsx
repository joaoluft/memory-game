import styled from "styled-components"

export const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 16px 24px;
  background: #f7f7f7;
  color: #303030;
  border-radius: 50px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  border: 2px solid ${props => props.theme.colors.aquaGreen};

  &:placeholder {
    color: #a3a3a3;
  }
`