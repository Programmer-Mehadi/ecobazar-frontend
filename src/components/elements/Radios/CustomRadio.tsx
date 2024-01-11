import React from "react"
import { Label, Radio } from "flowbite-react"

interface ICustomRadio {
  className?: string
  id?: string
  value?: string
}

export default function CustomRadio({ className, id, value }: ICustomRadio) {
  return (
    <label htmlFor={id} className="relative top-0 cursor-pointer border-0">
      <Radio
        id={id}
        name="countries"
        value={value}
        className={`bg-white custom_radio focus:ring-0 focus:ring-transparent + ${className}`}
      />
      <span
        className="absolute top-[8px] left-[5px] bg-[#00B207] w-[10px] h-[10px] rounded-full"
        style={{ display: "none" }}
      ></span>
    </label>
  )
}
