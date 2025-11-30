import fetch from "node-fetch";

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing 'url' query parameter");

  try {
    const response = await fetch(url);
    const body = await response.text();
    res.status(response.status).send(body);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}
