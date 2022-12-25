const haversine = require("haversine");
const pug = require("pug");

const artic = async (req, res) => {
  try {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const start = { latitude: 66.5, longitude: 0 };
    const end = { latitude, longitude };
    const distance = haversine(start, end, { unit: "mile" });

    res.render("artic", { distance });
  } catch (error) {
    console.log(error);
  }
};

module.exports = artic;
