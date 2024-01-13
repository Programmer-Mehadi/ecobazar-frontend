import { Checkbox } from "flowbite-react"
import React from "react"
import { twMerge } from "tailwind-merge"

interface ICustomCheckBox {
  className?: string
  id?: string
  checked?: boolean
  name?: string
  defaultChecked?: boolean
}

export default function CustomCheckbox(props: ICustomCheckBox) {
  return (
    <Checkbox
      {...props}
      className={twMerge("focus:ring-Primary ", props?.className)}
    />
  )
}
