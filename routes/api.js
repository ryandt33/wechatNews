const express = require("express");

const Article = require("../models/Article");
const parseArticle = require("../services/parseArticle");

const router = express.Router();

router.get("/articles", async (req, res) => {
  const arts = await Article.find();
  let articles = arts.reverse();

  console.log("Fetching article");
  console.log(articles.length);

  res.json(articles.slice(0, 120));
});

router.get("/articles/id", async (req, res) => {
  const articles = await Article.find();

  const arts = [];
  for (let art of articles) {
    arts.push({
      id: art._id,
      link: art.link,
      title: art.title,
      date: art.date,
    });
  }
  res.json(arts);
});

router.post("/articles", async (req, res) => {
  const url = req.body;
  console.log("preparse");
  await parseArticle.addArticle(url);
  res.send("Successfully added article");
});

router.delete("/articles/all", async (req, res) => {
  try {
    const articles = await Article.find();
    for (let art of articles) {
      console.log(`Deleting ${art._id}`);
      await Article.findByIdAndDelete(art._id);
    }
    res.send("Deleted all articles");
  } catch (err) {
    console.error(err.message);
    res.send("Error deleting all articles").status(500);
  }
});

router.delete("/articles/:id", async (req, res) => {
  console.log(`Deleting article with id: ${req.params.id}`);
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ deleted: req.params.id });
  } catch (err) {
    console.error(err.message);
    res.json({ error: "Failed to delete" + req.params.id });
  }
});

router.put("/articles/:id", async (req, res) => {
  console.log(`Updating article ${req.params.id}`);

  if (
    !(
      req.body.hasOwnProperty("title") &&
      req.body.hasOwnProperty("imageURL") &&
      req.body.hasOwnProperty("link")
    )
  ) {
    res.send(`Not all required fields were provided.`).status(400);
  }

  try {
    await parseArticle.updateArticle(req.params.id, req.body);
    res.send(`Successfully updated article ${req.params.id}`);
  } catch (err) {
    console.log(err.message);
    res.send(`Error updating article ${req.params.id}`).status(500);
  }
});

module.exports = router;
