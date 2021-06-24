const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

const port = 4000;

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.listen(port, async () => {
  console.log("Server started");
});

const client = axios.create({
  baseURL: "https://ftx.com/api/",
});

const request = (options) => {
  const onSuccess = (response) => {
    return Promise.resolve(response.data);
  };

  const onError = (error) => {
    console.error("Request Failed:", error.config);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }
    
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

app.get("/", async (req, res) => {
  const data = await request("/markets", (error, response) => {
    if (!error && response.statusCode === 200) {
      return response;
    }
  });

  res.send(data);
});