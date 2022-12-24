const speakeasy = require("speakeasy");

const speakEasy = async (req, res) => {
  try {
    const secret = speakeasy.generateSecret({ length: 20 });
    const qrCodeUrl = speakeasy.otpauthURL({
      secret: secret.base32,
      label: "MyApp",
    });
    const verified = speakeasy.verify({
      secret: secret.base32,
      encoding: "base32",
      token: userInputToken,
    });

    if (verified) {
      //user verfied
    } else {
      res.send("user is has no access");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = speakEasy;
