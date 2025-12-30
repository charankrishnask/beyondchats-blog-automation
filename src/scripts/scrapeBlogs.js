require("dotenv").config();
const axios = require("axios");
const cheerio = require("cheerio");
const connectDB = require("../config/db");
const Article = require("../models/Article");

const BASE_URL = "https://beyondchats.com";

async function scrape() {
  await connectDB();

  const { data } = await axios.get(`${BASE_URL}/blogs/`);
  const $ = cheerio.load(data);

  const linksSet = new Set();

  $("a[href^='/blogs/']").each((_, el) => {
    const href = $(el).attr("href");
    if (href && href !== "/blogs/") {
      linksSet.add(BASE_URL + href);
    }
  });

  const blogLinks = Array.from(linksSet).sort();

  if (blogLinks.length < 2) {
    console.error("Not enough blog links found");
    process.exit(1);
  }

  const oldestFive = blogLinks.slice(-5);

  await Article.deleteMany({});

  const articles = [];

  for (const url of oldestFive) {
    const { data: html } = await axios.get(url);
    const $$ = cheerio.load(html);

    const title = $$("h1").first().text().trim() || "Untitled";

    articles.push({
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      content: "Content will be enhanced in Phase 2 using LLM",
      sourceUrl: url,
    });
  }

  await Article.insertMany(articles);

  console.log(`Saved ${articles.length} articles`);
  process.exit();
}

scrape();
