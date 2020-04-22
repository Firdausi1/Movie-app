var express = require("express"),
	methodOverride = require("method-override"),
	app = express(),
	bodyParser = require("body-parser"),
	expressSanitizer = require("express-sanitizer"),					 
	mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/movie_app", {useNewUrlParser: true, useFindAndModify: false }).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });;
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

var movieSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    Date: {type:Date, default: Date.now}
})

var movie = mongoose.model("movie", movieSchema) 

// movie.create({
//     title: "spiderman",
//     image: "data:image/jpeg;base64,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",
//     body: "this is a spiderman movie"
// })

app.get("/", function(req, res){
    res.redirect("/movies")
})

app.get("/movies", function(req, res){
    movie.find({}, function(err, movie){
        if(err){
            console.log(err)
        }
        else{
            res.render("index", {movies:movie})
        }
    })
})

app.get("/movies/new", function(req, res){
    res.render("new")
})

app.post("/movies", function(req, res){
    req.body.movie.body =req.sanitize(req.body.movie.body)
    movie.create(req.body.movie, function(err, newMovie){
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/movies")
        }
    })
})

app.get("/movies/:id", function(req, res){
    movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            res.redirect("/movies")
        }
        else{
            res.render("show", {movie:foundMovie})
        }
    })
})

app.get("/movies/:id/edit", function(req, res){
    movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            res.redirect("/movies")
        }
        else{
            res.render("edit", {movie: foundMovie})
        }
    })
})

app.put("/movies/:id", function(req, res){
    req.body.movie.body =req.sanitize(req.body.movie.body)
    movie.findByIdAndUpdate(req.params.id, req.body.movie, function(err, updateMovie){
        if(err){
            res.redirect("/movies")
        }
        else{
            res.redirect("/movies/"+req.params.id)
        }
    })
})

app.delete("/movies/:id", function(req, res){
    movie.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/movies")
        }
        else{
            res.redirect("/movies")
        }
    })
})

app.listen(3000, function(){
	console.log("Serving App")
})