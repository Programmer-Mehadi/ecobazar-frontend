import React from "react"
import { Button } from "flowbite-react"
import { twMerge } from "tailwind-merge"

interface IButtonDisable {
  className?: string
  text?: string
}

const ButtonDisable = ({
  className = "",
  text = "Disable",
}: IButtonDisable) => {
  return (
    <Button
      disabled
      className={twMerge(
        "bg-gray-400 cursor-not-allowed rounded-[43px] " + className
      )}
    >
      {text}
    </Button>
  )
}

export default ButtonDisable
