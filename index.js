const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/news", (req, res) => {
  const options = {
    method: "GET",
    url: "https://crypto-news51.p.rapidapi.com/api/v1/crypto/articles",
    params: {
      page: "1",
      limit: "10",
      time_frame: "24h",
      format: "json",
    },
    headers: {
      "x-rapidapi-key": process.env.X_RapidAPI_Key,
      "x-rapidapi-host": "crypto-news51.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log("Server is running"));
