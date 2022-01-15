export default function Layout({ children }) {
  return (
    <div id="main" className="h-full">
      <main className="p-12 rounded-[3rem] bg-zinc-100 h-full grid gap-6 grid-cols-4">
        {children}
      </main>
    </div>
  )
}
