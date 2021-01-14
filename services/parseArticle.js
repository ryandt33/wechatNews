const cheerio = require("cheerio");
const axios = require("axios");

const Article = require("../models/Article");

const addArticle = async (url) => {
  const article = await axios.get(url.link);
  console.log("prefetch");

  const $ = cheerio.load(article.data);

  const title = $("#activity-name").text().trim();

  const imgs = $("img");
  imgURL = imgs["5"].attribs["data-src"];

  function getBase64(url) {
    console.log("Fetching image");
    return axios
      .get(url, {
        responseType: "arraybuffer",
      })
      .then((response) =>
        Buffer.from(response.data, "binary").toString("base64")
      );
  }

  const img = await getBase64(imgURL);

  const art = new Article({
    title: title,
    imageURL: img,
    link: url.link,
  });
  console.log(art);

  await art.save();
};

/***
 * @desc Update article already in the database - generally should be used to manually select the default image
 * @params id {String} - Referent to the mongodb _id
 * @params data {object} - Object with title, imageURL, link
 */
const updateArticle = async (id, data) => {
  await Article.findByIdAndUpdate(id, {
    title: data.title,
    imageURL: data.imgURL,
    link: data.link,
  });
};

module.exports = { addArticle: addArticle, updateArticle: updateArticle };
