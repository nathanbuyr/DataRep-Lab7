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

app.get('/api/movies', (req, res) => { //Json data is on the server backend 
    const movies = [
       
              {
                "Title": "Avengers: Infinity War (server)",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
              },
              {
                "Title": "Captain America: Civil War (server)",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
              },
              {
                "Title": "World War Z (server)",
                "Year": "2013",
                "imdbID": "tt0816711",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
              }
            ]
      ;
    res.status(200).json({movies}); // Returning status 200 means everything is working
});

// Posting the user inputted movie from the client into the server
app.post('/api/movies', (req,res) => {
    console.log(req.body.title); // Title is now on the server
    res.send("Movie added");
})


app.listen(port, () => { // app.listen is used to listen for connections and log when a connection is found
    console.log('Server is running on http://localhost:${port}');
});