const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleController");
const Article = require("../models/Article");
router.post("/", controller.createArticle);
router.get("/", controller.getArticles);
router.get("/:id", controller.getArticleById);
router.put("/:id", controller.updateArticle);
router.delete("/:id", controller.deleteArticle);
router.get("/", async (req, res) => {
  try {
    console.log("📥 GET /api/articles called");

    const articles = await Article.find();
    console.log("✅ Articles fetched:", articles.length);

    res.json(articles);
  } catch (err) {
    console.error("❌ Error fetching articles:", err);
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
