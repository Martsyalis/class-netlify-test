const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/test");
const randomSchema = new mongoose.Schema({ author: String, body: String });
const Random = mongoose.model("randomschema", randomSchema);

module.exports = { Random, connection };
