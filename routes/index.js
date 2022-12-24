var express = require("express");
var router = express.Router();
const uploadController = require("../controllers/upload");
const airportController = require("../controllers/airport");
const upload = require("../middleware/upload");
const timeController = require("../controllers/time");
const weatherController = require("../controllers/weather");
const redditController = require("../controllers/reddit");
const speakeasyController = require("../controllers/speakeasy");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/weather", weatherController.weather);

router.post("/upload", upload.single("file"), uploadController.uploadFiles);
router.get("/upload", uploadController.showFiles);

router.get("/airports", airportController);

router.get("/time", timeController);

router.get("/reddit", redditController);

router.get("/moneyCount", (req, res) => {
  res.render("moneyCount");
});

router.post("/moneyCount", (req, res) => {
  res.render("moneyCount");
});

router.post("/speakeasy", speakeasyController);

module.exports = router;
