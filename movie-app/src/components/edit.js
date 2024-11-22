
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
  let { id } = useParams(); //useParams is used to get the id of the movie from the URL, allowing us to retrieve the specific movie data from the database.
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const navigate = useNavigate(); // useNavigate is called to redirect the user back to the "read" page where they can view all movies


// useEffect grabs the server json and rewrites the old data with the new edited data
useEffect(() => {
    axios.get('http://localhost:4000/api/movie/' + id) //Serverside 
        .then((response) => {
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

const handleSubmit = (event) => {
    event.preventDefault(); //Prevents the text box from being blank
    const newMovie = { id, title, year, poster };
    axios.put('http://localhost:4000/api/movie/' + id, newMovie) //Pushing the data asynchorousnly
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Movie Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} /> {/* Changing var dynamically*/}
            </div>
            <div className="form-group">
                <label>Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} /> {/* Changing var dynamically*/}
            </div>
            <div className="form-group">
                <label>Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} /> {/* Changing var dynamically*/}
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Movie" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}