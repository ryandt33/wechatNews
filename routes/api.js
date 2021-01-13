const express = require("express");

const Article = require("../models/Article");
const parseArticle = require("../services/parseArticle");

const router = express.Router();

router.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

router.post("/articles", async (req, res) => {
  const url = req.body;
  await parseArticle(url);
  res.send("Successfully added article");
});

module.exports = router;
