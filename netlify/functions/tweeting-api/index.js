const express = require("express");
const serverless = require("serverless-http");
const app = express();
const {connection, Random} = require('./connection');


app.use(express.json());
app.use("/", async (req, res) => {
    await connection;
    console.log("tweed data is: ", req.body);
    const newTweet = await Random.create(req.body);
    res.json(newTweet);
});

exports.handler = serverless(app);
