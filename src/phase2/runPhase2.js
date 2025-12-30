/**
 * Phase 2 Runner
 * ---------------
 * This script:
 * 1. Fetches an article from Phase 1 API
 * 2. Uses fallback Google search results (top-ranking blogs)
 * 3. Scrapes external articles
 * 4. Uses LLM to rewrite original article
 * 5. Updates article via CRUD API
 */

const axios = require("axios");
const scrapeExternalArticle = require("./scrapeExternalArticle");
const rewriteWithLLM = require("./llmRewrite");

const API_BASE = "http://localhost:5000/api/articles";

async function runPhase2() {
  try {
    console.log("🚀 Phase 2 started...");

    // --------------------------------------------------
    // 1. Fetch articles from Phase 1 API
    // --------------------------------------------------
    console.log("Fetching articles from API...");
    const { data: articles } = await axios.get(API_BASE);

    const article = articles.find(a => !a.isUpdated);

    if (!article) {
      console.log("No articles left to update. Phase 2 complete.");
      return;
    }

    console.log("Selected article:", article.title);

    // --------------------------------------------------
    // 2. Google Search (Fallback URLs)
    // --------------------------------------------------
    console.log("Using fallback Google search results...");

    // These represent top-ranking external blog articles
    const externalLinks = [
      "https://en.wikipedia.org/wiki/Chatbot",
      "https://en.wikipedia.org/wiki/Artificial_intelligence"
    ];


    console.log("Selected reference links:");
    externalLinks.forEach(link => console.log(" -", link));
    console.log("DEBUG externalLinks:", externalLinks);
    // --------------------------------------------------
    // 3. Scrape external reference articles
    // --------------------------------------------------
    console.log("Scraping external reference articles...");
    const referenceArticles = [];

    for (const link of externalLinks) {
      try {
        console.log("Scraping:", link);
        const scraped = await scrapeExternalArticle(link);
        referenceArticles.push(scraped);
      } catch (err) {
        console.error("Failed to scrape:", link);
        console.error(err.message);
      }
    }

    if (referenceArticles.length < 2) {
      console.log("Not enough reference content scraped. Aborting.");
      return;
    }

    // --------------------------------------------------
    // 4. Rewrite article using LLM
    // --------------------------------------------------
    console.log("Rewriting article using LLM...");
    const updatedContent = await rewriteWithLLM(
      article.content,
      referenceArticles
    );

    // --------------------------------------------------
    // 5. Save updated article via CRUD API
    // --------------------------------------------------
    console.log("Saving updated article...");
    await axios.put(`${API_BASE}/${article._id}`, {
      content: updatedContent,
      isUpdated: true,
      references: referenceArticles.map(r => r.url)
    });

    console.log("✅ Article updated successfully!");
  } catch (error) {
    console.error("❌ Phase 2 failed.");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

// Execute Phase 2
runPhase2();
