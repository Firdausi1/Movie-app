var express = require("express"),
	methodOverride = require("method-override"),
	app = express(),
	bodyParser = require("body-parser"),
	expressSanitizer = require("express-sanitizer"),					 
    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    movie = require("./models/movie"),
    comment = require("./models/comment"),
    user = require("./models/user");

//     seedDB = require("./seed");

// seedDB();

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

app.use(require("express-session")({
	secret: "could be anything",
	resave: false,
	saveUninitialized: false
})),

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
})

app.get("/", function(req, res){
    res.redirect("/movies")
})

app.get("/movies", function(req, res){
    movie.find({}, function(err, movie){
        if(err){
            console.log(err)
        }
        else{
            res.render("movies/index", {movies:movie})
        }
    })
})

app.get("/movies/new", function(req, res){
    res.render("movies/new")
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
    movie.findById(req.params.id).populate("comments").exec(function(err, foundMovie){
        if(err){
            res.redirect("/movies")
        }
        else{
            res.render("movies/show", {movie:foundMovie})
        }
    })
})

app.get("/movies/:id/comments/new", isLoggedIn, function(req, res){
    movie.findById(req.params.id, function(err, movie){
        if(err){
            console.log(err)
        }else{
            res.render("comments/new", {movie:movie});
        }
    })
})

app.post("/movies/:id/comments", isLoggedIn, function(req, res){
    movie.findById(req.params.id, function(err, movie){
        if(err){
            console.log(err);
        }else{
            comment.create(req.body.comment, function(err, comment){
                if(err){
                    res.redirect("/movies");
                }else{
                    movie.comments.push(comment);
                    movie.save();
                    res.redirect("/movies/"+req.params.id)
                }
            })
        }
    })
})

app.get("/movies/:id/edit", function(req, res){
    movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            res.redirect("/movies")
        }
        else{
            res.render("movies/edit", {movie: foundMovie})
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

//auth routes

app.get("/register", function(req, res){
    res.render("register")
})

app.post("/register", function(req, res){
    var newUser = new user({username: req.body.username});
    user.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/movies")
        })
    })
})

app.get("/login", function(req, res){
    res.render("login")
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/movies",
    failureRedirect: "/login"
}), function(req, res){

})

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/movies");
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

app.listen(3000, function(){
	console.log("Serving App")
})