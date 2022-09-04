import fetch from "node-fetch";

export const Preview = async (req, res) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://ippei-shimizu.microcms.io/api/v1/blogs/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.apiKey || "" } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.id}` });
  res.end("Preview mode enabled");
};

export default Preview;
