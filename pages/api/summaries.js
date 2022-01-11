export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      number: 2,
      text: "About to expire",
      color: "green",
    },
    {
      id: 2,
      number: 4,
      text: "Recently renewed",
      color: "sky",
    },
    {
      id: 3,
      number: 12,
      text: "Active certificates",
      color: "purple",
    },
    {
      id: 4,
      number: 7,
      text: "Employees registered",
      color: "rose",
    },
  ]);
}
