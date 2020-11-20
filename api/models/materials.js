var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MaterialSchema = new Schema({
    title: {},
    details: {},
});

module.exports = mongoose.model("materials", MaterialSchema);