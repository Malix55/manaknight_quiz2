var express = require("express");
var router = express.Router();
const uploadController = require("../controllers/upload");
const airportController = require("../controllers/airport");
const timeController = require("../controllers/time");
const weatherController = require("../controllers/weather");
const redditController = require("../controllers/reddit");
const speakeasyController = require("../controllers/speakeasy");
const articController = require("../controllers/artic");
const moneyController = require("../controllers/moneyCount");

const multer = require("multer");
const redis = require("redis");
const client = redis.createClient();
const upload = multer({ dest: "uploads/" });

// client.set("chatroom", JSON.stringify([]));

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

router.post("/calculate", moneyController);

router.get("/map", (req, res) => {
  res.render("map");
});

router.post("/artic", articController);
router.get("/artic", (req, res) => {
  res.render("artic");
});

router.post("/speakeasyAuth", speakeasyController);
router.get("/speakeasy", (req, res) => {
  res.render("speakeasy");

  router.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });
});

// router.get("/chat", (req, res) => {
//   const messages = [{ text: "Hello" }, { text: "World" }];
//   res.render("chat", { messages: messages });
// });

// router.post("/send", (req, res) => {
//   const message = req.body.message;
//   client.lpush("messages", message);
//   res.sendStatus(200);
// });

// router.get("/poll", async (req, res) => {
//   console.log(client);
//   await client.llen("messages", (err, len) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//       return;
//     } else {
//       console.log(`The length of the list is ${listLength}.`);
//     }

//     if (req.headers["last-message-count"] !== len) {
//       res.sendStatus(200);
//     } else {
//       client.blpop("messages", 1, (err, result) => {
//         if (err) {
//           console.error(err);
//           res.sendStatus(500);
//           return;
//         }

//         if (result) {
//           res.sendStatus(200);
//         } else {
//           res.sendStatus(404);
//         }
//       });
//     }
//   });
// });

// router.get("/all", (req, res) => {
//   client.lrange("messages", 0, -1, (err, messages) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//       return;
//     }
//     res.json(messages);
//   });
// });

// router.post("/save", (req, res) => {
//   const mysql = require("mysql2");
//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "testdb",
//   });

//   client.lrange("messages", 0, -1, (err, messages) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//       return;
//     }
//     connection.query(
//       "INSERT INTO chat (create_at, chat_messages) VALUES (?, ?)",
//       [Date.now(), JSON.stringify(messages)],
//       (err) => {
//         if (err) {
//           console.error(err);
//           res.sendStatus(500);
//           return;
//         }
//         res.sendStatus(200);
//       }
//     );
//   });
// });

module.exports = router;
