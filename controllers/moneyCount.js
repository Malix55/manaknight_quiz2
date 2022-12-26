const moneyCount = async (req, res) => {
  try {
    let amount = parseFloat(req.body.amount);

    let numTwentyDollarBills = 0;
    let numTenDollarBills = 0;
    let numFiveDollarBills = 0;
    let numOneDollarBills = 0;
    let numTwentyFiveCentCoins = 0;
    let numTenCentCoins = 0;
    let numFiveCentCoins = 0;
    let numOneCentCoins = 0;

    while (amount >= 20) {
      numTwentyDollarBills += 1;
      amount -= 20;
    }
    while (amount >= 10) {
      numTenDollarBills += 1;
      amount -= 10;
    }
    while (amount >= 5) {
      numFiveDollarBills += 1;
      amount -= 5;
    }
    while (amount >= 1) {
      numOneDollarBills += 1;
      amount -= 1;
    }
    while (amount >= 0.25) {
      numTwentyFiveCentCoins += 1;
      amount -= 0.25;
    }
    while (amount >= 0.1) {
      numTenCentCoins += 1;
      amount -= 0.1;
    }
    while (amount >= 0.05) {
      numFiveCentCoins += 1;
      amount -= 0.05;
    }
    while (amount >= 0.01) {
      numOneCentCoins += 1;
      amount -= 0.01;
    }

    res.render("moneyCount", {
      numTwentyDollarBills,
      numTenDollarBills,
      numFiveDollarBills,
      numOneDollarBills,
      numTwentyFiveCentCoins,
      numTenCentCoins,
      numFiveCentCoins,
      numOneCentCoins,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = moneyCount;
