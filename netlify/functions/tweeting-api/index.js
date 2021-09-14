const express = require("express");
const serverless = require("serverless-http");
const app = express();
const morgan = require("morgan");
const { connection, Random } = require("./connection");

app.use(morgan("tiny"));
app.use(express.json());

// this long path is super annoyiing but nesseserry. you can aslo do "*" to catch all posts
app.post("/.netlify/functions/tweeting-api/", async (req, res) => {
    console.log("in post: ", req);
    await connection;
    console.log("tweed data is: ", req.body);
    const newTweet = await Random.create(req.body);
    res.json(newTweet);
});

exports.handler = serverless(app);
