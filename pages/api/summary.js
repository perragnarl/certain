export default function handler(req, res) {
  res.status(200).json(
    [
      { 
        number: 2,
        text: 'Bbout to expire'
      },
      {
        number: 4,
        text: 'Recently renewed'
      },
      {
        number: 12,
        text: 'Active certificates'
      }
    ]
  )
}