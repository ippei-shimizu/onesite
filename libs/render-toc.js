import * as cheerio from "cheerio";

export const renderToc = (content) => {
  const $ = cheerio.load(content);
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data) => ({
    text: data.children[0].data,
    id: data.attribs.id,
  }));

  return toc;
};
