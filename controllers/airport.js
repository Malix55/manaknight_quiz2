const fs = require("fs");
const csv = require("csv-parser");

const airportNames = async (req, res) => {
  try {
    const search = req.query.search;

    // Read the airports.csv file and filter the list of airports based on the search query
    const airports = [];
    fs.createReadStream("../NODE_TASK_2A/airports.csv")
      .pipe(csv())
      .on("data", (row) => {
        // if (row.name.includes(search)) {
        //   airports.push({
        //     code: row.code,
        //     name: row.name,
        //   });
        // }
        airports.push({
          code: row.code,
          name: row.name,
        });
      })
      .on("end", () => {
        const names = airports.map((airport) => airport.name);
        res.json(names);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = airportNames;
