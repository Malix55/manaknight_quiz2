var express = require("express");
var router = express.Router();
const uploadController = require("../controllers/upload");
const airportController = require("../controllers/airport");
const timeController = require("../controllers/time");
const weatherController = require("../controllers/weather");
const redditController = require("../controllers/reddit");
const speakeasyController = require("../controllers/speakeasy");
const articController = require("../controllers/artic");

const multer = require("multer");
const redis = require("redis");
const client = redis.createClient();
const upload = multer({ dest: "uploads/" });

client.set("chatroom", JSON.stringify([]));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/weather", weatherController.weather);

router.post("/upload", upload.single("image"), uploadController.uploadFiles);
router.get("/upload", uploadController.showFiles);

router.get("/airports", airportController);
router.get("/airports", (req, res) => {
  res.render("airports");
});

router.get("/time", timeController);

router.get("/reddit", redditController);

router.get("/moneyCount", (req, res) => {
  res.render("moneyCount");
});

router.post("/moneyCount", (req, res) => {
  res.render("moneyCount");
});

router.get("/map", (req, res) => {
  res.render("map");
});

router.post("/artic", articController);

router.post("/speakeasyAuth", speakeasyController);
router.get("/speakeasy", (req, res) => {
  res.render("speakeasy");

  router.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });
});

router.get("/chat", (req, res) => {
  res.render("chat");
});

router.post("/send", async (req, res) => {
  const message = req.body.message;
  await client.get("chatroom", (err, chatroom) => {
    chatroom = JSON.parse(chatroom);
    chatroom.push(message);
    client.set("chatroom", JSON.stringify(chatroom));
  });
  res.sendStatus(200);
});

router.get("/poll", (req, res) => {
  const longpoll = (callback) => {
    client.watch("chatroom", (err) => {
      client.get("chatroom", (err, chatroom) => {
        chatroom = JSON.parse(chatroom);
        if (chatroom.length > 0) {
          callback(chatroom);
        } else {
          client.on("message", (channel, message) => {
            message = JSON.parse(message);
            callback(message);
          });
        }
      });
    });
  };
  longpoll((messages) => {
    res.send(messages);
  });
});

router.get("/chat/all", async (req, res) => {
  await client.get("chatroom", (err, chatroom) => {
    chatroom = JSON.parse(chatroom);
    res.send(chatroom);
  });
});

router.post("/save", (req, res) => {
  client.get("chatroom", (err, chatroom) => {
    chatroom = JSON.parse(chatroom);
    res.sendStatus(200);
  });
});

module.exports = router;
