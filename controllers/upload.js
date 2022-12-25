const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    const image = req.file;
    Image.create({
      name: image.originalname,
      data: image.buffer,
    }).then(() => {
      console.log("Image saved to database");
    });
    res.redirect("/upload");
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

const showFiles = async (req, res) => {
  try {
    Image.findOne({
      order: [["createdAt", "DESC"]],
    }).then((latestImage) => {
      res.render("upload", { latestImage });
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
  showFiles,
};
