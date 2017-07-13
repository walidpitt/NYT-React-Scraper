
var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    date: {
        type: Date
    },
    url: {
        type: String,
        required: true,
        trim: true,
    }
});


module.exports = mongoose.model("Article", ArticleSchema);