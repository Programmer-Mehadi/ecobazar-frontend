interface ICustomLoaderWithButton {
  color?: string
  size?: string
  className?: string
  text?: string
}
import { twMerge } from "tailwind-merge"
import React from "react"
import { Button, Spinner } from "flowbite-react"
const CustomLoaderWithButton = ({
  color = "gray",
  size = "sm",
  className = "",
  text = "Loading...",
}: ICustomLoaderWithButton) => {
  return (
    <Button color={color}>
      <Spinner aria-label="Alternate spinner button example" size={size} />
      <span className={twMerge(`pl-3 ${className}`)}>{text}</span>
    </Button>
  )
}

export default CustomLoaderWithButton
