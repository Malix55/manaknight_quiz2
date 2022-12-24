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

      const data = JSON.parse(body);
      const temperature = data.current.temp_c;
      const condition = data.current.condition.text;

      res.render("weather", { temperature, condition });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { weather };
