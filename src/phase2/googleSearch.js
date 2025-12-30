const axios = require("axios");

async function searchGoogle(query) {
  try {
    const response = await axios.post(
      "https://google.serper.dev/search",
      {
        q: query,
        num: 5
      },
      {
        headers: {
          "X-API-KEY": process.env.SERPER_API_KEY
        }
      }
    );

    return response.data.organic || [];
  } catch (err) {
    console.error(
      "Serper API error:",
      err.response?.status,
      err.response?.data
    );
    throw err;
  }
}

module.exports = searchGoogle;
