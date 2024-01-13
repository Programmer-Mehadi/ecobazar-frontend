import React from "react"
import { Dropdown, DropdownItem } from "flowbite-react"
import { twMerge } from "tailwind-merge"

interface ISingleSelectDropDown {
  className?: string
  id?: string
  name?: string
  style?: string
  defaultChecked?: boolean
  onChange?: (item: any) => void
  value?: string
  itemsList?: any
}

export default function SingleSelectDropDown(props: ISingleSelectDropDown) {
  const {
    className = "",
    style = {},
    value = "",
    onChange = (item) => {},
    id = "",
    defaultChecked = false,
    itemsList = [],
  } = props
  return (
    <Dropdown
      label="Select Dropdown"
      dismissOnClick={true}
      style={{
        backgroundColor: "white",
        color: "#4D4D4D",
        borderColor: "#E6E6E6",
        ...style,
      }}
      id={id}
      value={value}
      className={twMerge(`${className}`)}
    >
      {itemsList.length === 0 ? (
        <DropdownItem className="bg-gray-100">
          <p>No items</p>
        </DropdownItem>
      ) : (
        <>
          {itemsList.map((item: any, index: number) => (
            <DropdownItem
              onClick={() => onChange(item)}
              key={index}
              className="hover:bg-Primary hover:bg-opacity-20"
            >
              <p>{item.showValue}</p>
            </DropdownItem>
          ))}{" "}
        </>
      )}
    </Dropdown>
  )
}
