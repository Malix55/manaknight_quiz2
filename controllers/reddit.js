const request = require("request");

const latestPost = async (req, res) => {
  try {
    const options = {
      url: "https://www.reddit.com/r/programming.json",
      method: "GET",
    };

    request(options, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        const data = JSON.parse(body);
        const evenPosts = data.data.children.filter(
          (post, index) => index % 2 === 0
        );
        const topFourEvenPosts = evenPosts.slice(0, 4);
        res.render("reddit", { posts: topFourEvenPosts });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = latestPost;
