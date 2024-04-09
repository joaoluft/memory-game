import { StyledButton } from "Components/Button/styles"

export const Button = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>
}