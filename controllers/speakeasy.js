const speakeasy = require("speakeasy");

const speakEasy = async (req, res) => {
  try {
    const code = req.body.code;

    const verified = speakeasy.totp.verify({
      secret: 12345678,
      encoding: "base32",
      token: code,
    });

    if (verified) {
      res.render("dashboard", { modalHidden: true });
    } else {
      res.render("2fa", { error: "Invalid code. Please try again." });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = speakEasy;
