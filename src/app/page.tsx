"use client"

import ButtonDisable from "@/components/Buttons/ButtonDisable"
import ButtonOnClick from "@/components/Buttons/ButtonOnClick"
import ButtonRoute from "@/components/Buttons/ButtonRoute"
import CustomRadio from "@/components/elements/Radios/CustomRadio"
import { Label, Radio } from "flowbite-react"

export default function Home() {
  function handleClick() {
    console.log("click")
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h2>Home page</h2>
      <ButtonOnClick onClickFnc={handleClick} />
      <ButtonRoute />
      <ButtonDisable />
      <fieldset className="flex max-w-md flex-col gap-4">
        <legend className="mb-4">Choose your favorite country</legend>
        <div className="flex items-center gap-2">
          <CustomRadio />
          <Label htmlFor="united-state">United States</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="germany" name="countries" value="Germany" />
          <Label htmlFor="germany">Germany</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="spain" name="countries" value="Spain" />
          <Label htmlFor="spain">Spain</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="uk" name="countries" value="United Kingdom" />
          <Label htmlFor="uk">United Kingdom</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="china" name="countries" value="China" disabled />
          <Label htmlFor="china" disabled>
            China (disabled)
          </Label>
        </div>
      </fieldset>
    </main>
  )
}
