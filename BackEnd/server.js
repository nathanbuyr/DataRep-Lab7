const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors'); // Allows communication between the React app and Node/Express server
app.use(cors());

//CORS is a security feature built into browsers that restricts web pages from making requests to a different domain or port than the one that served the web page.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Body Parsing is used to parse the body of an incoming HTTP request in a middleware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@lab7.bhppf.mongodb.net/DB14');

// Schema defined, Allows for the enforcing of specific fileds such as title,year,poster. Can be used to create, read, update, and delete documents in MongoDB
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Data model is a blueprint for defining the structure of data within a MongoDB collection
const Movie = mongoose.model('Movie', movieSchema);

// This sets up a POST route at /api/movies, which will be used to add new movies.
 app.post('/api/movies', async (req, res)=>{ // async and await are used to handle asynchronous operations like saving data to a database

 const { title, year, poster } = req.body;

 const newMovie = new Movie({ title, year, poster }); // A new Movie instance is created using new Movie({ title, year, poster })
 await newMovie.save();

 res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
 })

 // Sets up a GET route at /api/movies, which will return all movies
 app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

// Posting the user inputted movie from the client into the server
app.post('/api/movies', (req,res) => {
    console.log(req.body.title); // Title is now on the server
    res.send("Movie added");
})


app.listen(port, () => { // app.listen is used to listen for connections and log when a connection is found
    console.log('Server is running on http://localhost:${port}');
});

// {
//   "Title": "Avengers: Infinity War (server)",
//   "Year": "2018",
//   "imdbID": "tt4154756",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
// },
// {
//   "Title": "Captain America: Civil War (server)",
//   "Year": "2016",
//   "imdbID": "tt3498820",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
// },
// {
//   "Title": "World War Z (server)",
//   "Year": "2013",
//   "imdbID": "tt0816711",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
// }