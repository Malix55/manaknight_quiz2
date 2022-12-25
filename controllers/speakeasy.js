const speakeasy = require("speakeasy");

const speakEasy = async (req, res) => {
  try {
    // Get the 2FA code from the form submission
    const code = req.body.code;

    // Use speakeasy to verify the code
    const verified = speakeasy.totp.verify({
      secret: 12345678,
      encoding: "base32",
      token: code,
    });

    if (verified) {
      // If the code is valid, render the dashboard
      res.render("dashboard", { modalHidden: true });
    } else {
      // If the code is invalid, render the 2FA form again with an error message
      res.render("2fa", { error: "Invalid code. Please try again." });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = speakEasy;
