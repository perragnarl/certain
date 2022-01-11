export default function Widget({ cols, rows, background, children }) {
  return (
    <div className={`col-span-${cols} row-span-${rows} ${background} rounded-3xl p-6`}>
      {children}
    </div>
  )
}
