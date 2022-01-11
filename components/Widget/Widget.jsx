import styles from './Widget.module.css'

export default function Widget({ cols, rows, background, children }) {
  const colSpan = `cols-${cols}`;
  const rowSpan = `rows-${rows}`;

  return (
    <div className={`
        ${styles.widget} 
        ${styles[background]} 
        ${styles[rowSpan]}
        ${styles[colSpan]}
      `}
    >
      {children}
    </div>
  )
}
