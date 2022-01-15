export default function Table({ columns, data }) {
  const keys = columns.map(col => col.key);

  return (
  <table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        {columns.map((col, i) => (
          <th key={i} className="px-6 py-3 text-left font-semibold uppercase tracking-wider">{col.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {Object.keys(row).map((cell, i) => (
            keys.includes(cell) && <td key={i} className="px-6 py-4 whitespace-nowrap" dangerouslySetInnerHTML={{__html: row[cell]}} />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  );
}
