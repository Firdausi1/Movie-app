var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
        }
    ],
    cast: String,
    director: String,
    Date: {type:Date, default: Date.now}
})


module.exports = mongoose.model("movie", movieSchema) 
