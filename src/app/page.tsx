import ButtonRoute from "@/components/elements/Buttons/ButtonRoute"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h2>Home Page</h2>
      <ButtonRoute href="/search" text="Search Page" />
    </main>
  )
}
