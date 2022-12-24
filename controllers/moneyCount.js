const moneyCount = async (req, res) => {
  try {
    const moneyAmount = parseFloat(req.query.amount);

    const coinCount = {
      20: 0,
      10: 0,
      5: 0,
      1: 0,
      0.25: 0,
      0.1: 0,
      0.05: 0,
      0.01: 0,
    };
    for (const [denomination, count] of Object.entries(coinCount)) {
      coinCount[denomination] = Math.floor(moneyAmount / denomination);
      moneyAmount -= coinCount[denomination] * denomination;
    }

    res.render("moneyCount", { coinCount });
  } catch (error) {
    console.log(error);
  }
};

module.exports = moneyCount;
