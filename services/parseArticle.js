const cheerio = require("cheerio");
const axios = require("axios");

const Article = require("../models/Article");

const parseArticle = async (url) => {
  const article = await axios.get(url.link);

  const $ = cheerio.load(article.data);

  const title = $("#activity-name").text().trim();

  const imgs = $("img");
  imgURL = imgs["5"].attribs["data-src"];

  const art = new Article({
    title: title,
    imageURL: imgURL,
    link: url.link,
  });

  await art.save();
};

module.exports = parseArticle;
