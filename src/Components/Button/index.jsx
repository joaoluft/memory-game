import { StyledButton } from "Components/Button/styles"

export const Button = ({color="aquaGreen", fontColor="gray", children, ...props}) => {
  return <StyledButton $color={color} $fontColor={fontColor} {...props}>{children}</StyledButton>
}