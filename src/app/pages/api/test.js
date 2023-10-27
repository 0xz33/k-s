export default function handler(req, res) {
  console.log("Test API handler invoked");
  res.status(200).json({ message: "Test successful" });
}
