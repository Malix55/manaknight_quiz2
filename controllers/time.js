const pug = require("pug");

const time = async (req, res) => {
  try {
    let currentUtcTime = new Date();
    let londonOffset = -60; // London is UTC+01:00
    let estOffset = -300; // EST is UTC-05:00
    let nigeriaOffset = 60; // Nigeria is UTC+01:00
    let pakistanOffset = 180; // Pakistan is UTC+03:00
    let londonTime = new Date(currentUtcTime.getTime() + londonOffset * 60000);
    let estTime = new Date(currentUtcTime.getTime() + estOffset * 60000);
    let nigeriaTime = new Date(
      currentUtcTime.getTime() + nigeriaOffset * 60000
    );
    let pakistanTime = new Date(
      currentUtcTime.getTime() + pakistanOffset * 60000
    );

    res.render("time", {
      londonTime: londonTime,
      estTime: estTime,
      nigeriaTime: nigeriaTime,
      pakistanTime: pakistanTime,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = time;
