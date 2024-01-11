import React from "react"
import { Button } from "flowbite-react"
import { twMerge } from "tailwind-merge"
interface IButtonRoute {
  className?: string
  text?: string
  href?: string
}

const ButtonRoute = ({
  className = "",
  text = "On Route Button",
  href = "",
}) => {
  return (
    <Button
      className={twMerge(
        "bg-Primary border-Primary rounded-[43px] enabled:hover:bg-HardPrimary enabled:hover:border-HardPrimary focus:ring-0 focus:outline-none focus:ring-HardPrimary " +
          className
      )}
      href={href}
    >
      {text}
    </Button>
  )
}

export default ButtonRoute
