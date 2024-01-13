import { ToggleSwitch } from "flowbite-react"
import React from "react"
import { twMerge } from "tailwind-merge"

interface ICustomToggle {
  className?: string
  checked?: boolean
  label?: string
  onChange?: () => void
}

export default function CustomToggle({
  className = "",
  checked = false,
  label = "",
  onChange = () => {},
}: ICustomToggle) {
  return (
    <ToggleSwitch
      checked={checked}
      label={label}
      onChange={onChange}
      className={twMerge(`bg-[#d00B207] ${className}`)}
    />
  )
}
