import React from "react"
import { Label, Radio } from "flowbite-react"

interface ICustomRadio {
  className?: string
  id?: string
  name?: string
  value?: string
  disabled?: boolean
}

export default function CustomRadio({
  className = "",
  id = "",
  value = "",
  name = "",
  disabled = false,
}: ICustomRadio) {
  return (
    <label htmlFor={id} className="relative top-0 cursor-pointer border-0">
      <Radio
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        className={`bg-white custom_radio focus:ring-0 focus:ring-transparent + ${className}`}
      />
      <span
        className="absolute top-[9px] left-[5px] bg-[#00B207] w-[10px] h-[10px] rounded-full"
        style={{ display: "none" }}
      ></span>
    </label>
  )
}
