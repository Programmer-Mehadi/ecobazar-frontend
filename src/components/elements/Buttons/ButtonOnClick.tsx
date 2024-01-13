"use client"

interface IButtonOnCLick {
  onClickFnc?: () => void
  className?: string
  text?: string
}

import React from "react"
import { Button } from "flowbite-react"
import { twMerge } from "tailwind-merge"

const ButtonOnClick = ({
  onClickFnc = () => {},
  className = "",
  text = "On Click Button",
}: IButtonOnCLick) => {
  return (
    <Button
      onClick={() => {
        onClickFnc()
      }}
      className={twMerge(
        "bg-Primary border-Primary rounded-[43px] enabled:hover:bg-HardPrimary enabled:hover:border-HardPrimary focus:ring-0 focus:outline-none focus:ring-HardPrimary " +
          className
      )}
    >
      {text}
    </Button>
  )
}

export default ButtonOnClick
