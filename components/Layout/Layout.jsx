export default function Layout({ children }) {
  return (
    <div className="pr-6 pb-6 h-full">
      <main id="main" className="p-12 rounded-3xl bg-zinc-100 h-full">
        {children}
      </main>
    </div>
  )
}
