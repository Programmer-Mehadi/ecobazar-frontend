import { TextInput } from "flowbite-react"
import React from "react"
import { twMerge } from "tailwind-merge"

interface ICustomTextInput {
  className?: string
  id?: string
  type?: string
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  disabled?: boolean
  autoComplete?: string
  style?: string
}

export default function CustomTextInput(props: ICustomTextInput) {
  const { style = {}, className, ...rest } = props
  return (
    <TextInput
      {...rest}
      style={{ ...style }}
      className={twMerge(`w-full ${className}`)}
    />
  )
}
