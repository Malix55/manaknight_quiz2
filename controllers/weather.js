const request = require("request");

const weather = async (req, res) => {
  try {
    const apiKey = "18d9d74881c44a46bf0135014222412";
    const city = "London";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    request(url, (err, response, body) => {
      if (err) {
        return res.send({ error: err });
      }

      const weatherData = JSON.parse(body);
      const temperature = (weatherData.current.temp_f - 32) * (5 / 9);
      const condition = weatherData.current.condition.text;

      res.render("weather", { temperature, condition });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { weather };
