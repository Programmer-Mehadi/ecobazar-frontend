interface ICustomLoaderWithText {
  size?: string
  className?: string
  text?: string
}
import { twMerge } from "tailwind-merge"
import React from "react"
import { Spinner } from "flowbite-react"
const CustomLoaderWithText = ({
  size = "sm",
  className = "",
  text = "Loading...",
}: ICustomLoaderWithText) => {
  return (
    <div className="inline-flex">
      <Spinner aria-label="spinner" size={size} />
      <span className={twMerge(`pl-3 ${className}`)}>{text}</span>
    </div>
  )
}

export default CustomLoaderWithText
