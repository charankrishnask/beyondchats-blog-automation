const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeExternalArticle(url) {
  const response = await axios.get(url, {
    timeout: 15000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0",
      Accept: "text/html"
    }
  });

  const $ = cheerio.load(response.data);

  const title =
    $("h1").first().text().trim() ||
    $("title").text().trim();

  let content = "";

  // Wikipedia / MDN friendly extraction
  $("p").each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 50) {
      content += text + "\n\n";
    }
  });

  if (!content || content.length < 500) {
    throw new Error("Insufficient article content");
  }

  return {
    title,
    url,
    content
  };
}

module.exports = scrapeExternalArticle;
