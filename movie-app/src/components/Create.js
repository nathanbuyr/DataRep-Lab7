// create.js

import { useState } from "react";
import axios from "axios"; // Axios is used here to fetch data in react applications through asynchronously HTTP requests

function Create() {
  const [title, setTitle] = useState(''); //useState is used to store data returned from an API and manage the state of the application
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // create.js
const handleSubmit = (e) => {
  e.preventDefault();
  
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  
  axios.post('http://localhost:4000/api/movies', movie) // Posts the movie from the client on to the server
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));
};
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}> {/* When button is clicked, handleSubmit function is called*/}
        {/* Movie Title handler*/}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} //onChange recognizes when the button is clicked and invoked the function to log the data
          />
        </div>
        {/* Movie Year handler*/}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>
        {/* Movie Poster handler*/}
        <div className="form-group">
          <label>Add Movie Poster url: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>

    
  );
}

export default Create;