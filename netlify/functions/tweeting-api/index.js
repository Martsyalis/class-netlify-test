const express = require("express");
const serverless = require("serverless-http");
const app = express();
const { connection, Random } = require("./connection");

exports.handler = async event => {
    await connection;
    console.log("event is: ", event);
    switch (event.httpMethod) {
        case "POST": {
            const newRandom = await Random.create(JSON.parse(event.body));
            return {
                statusCode: 201,
                body: `new entry with id of: ${newRandom._id} was created`,
            };
        }
        case "GET": {
            const allRandom = await Random.find();
            return {
                statusCode: 200,
                body: JSON.stringify(allRandom),
            };
        }
    }
};
