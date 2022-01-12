export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Certificate expiration",
      body: "Secure work is about to expire for John Doe",
      type: "warning"
    },
    {
      id: 2,
      title: "Certain update",
      body: "This cool new feature was just added to Certain where you can do fun stuff with things and such",
      type: "info"
    },
    {
      id: 3,
      title: "New coworker",
      body: "Jane Doe just registered",
      type: "success"
    },
  ]);
}
