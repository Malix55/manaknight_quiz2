const fs = require("fs");
const csv = require("csv");

const airportNames = async (req, res) => {
  try {
    const search = req.query.search;

    const airports = [];
    fs.createReadStream("../NODE_TASK_2A/airports.csv")
      .pipe(csv())
      .on("data", (row) => {
        if (
          !search ||
          search.length < 3 ||
          row.name.toLowerCase().includes(search.toLowerCase())
        ) {
          airports.push({
            name: row.name,
          });
        }
      })
      .on("end", () => {
        console.log(airports);
        res.render("airports", { airports });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = airportNames;
