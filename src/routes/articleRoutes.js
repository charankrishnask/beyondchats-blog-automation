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
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
