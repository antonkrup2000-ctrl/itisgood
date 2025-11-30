import fetch from "node-fetch";

export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    res.status(400).send("Missing 'url' query parameter");
    return;
  }

  try {
    const response = await fetch(targetUrl);
    const body = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(body);
  } catch (err) {
    res.status(500).send("Error fetching target URL: " + err.message);
  }
}
