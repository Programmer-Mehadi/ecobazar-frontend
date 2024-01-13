import React from "react"
import { Button } from "flowbite-react"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
interface IButtonRoute {
  className?: string
  text?: string
  href?: string
}

const ButtonRoute = ({
  className = "",
  text = "On Route Button",
  href = "",
}: IButtonRoute) => {
  return (
    <Button
      className={twMerge(
        "bg-Primary border-Primary rounded-[43px] enabled:hover:bg-HardPrimary enabled:hover:border-HardPrimary focus:ring-0 focus:outline-none focus:ring-HardPrimary " +
          className
      )}
    >
      <Link href={href}>{text}</Link>
    </Button>
  )
}

export default ButtonRoute
