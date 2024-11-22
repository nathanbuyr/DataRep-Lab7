import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
{/* MovieItem Function*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }
{/* Props are read only,clear and reusable*/ }
const MovieItem = (props)=>
{
    //useEffect function is used to log props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("Movie Item:", props.Mymovies);
      }, [props.mymovie]); // Only run this effect when the Mymovies prop changes
    
    return(
        <div>
            {/*Creating the card structure for each movie*/}
            <Card>
             {/*Header for the title*/}
            <Card.Header>{props.myMovies.title}</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <img src={props.myMovies.poster}></img>
            {/*Footer adds extra info at the bottom of card*/}
            <footer>{props.myMovies.year}</footer>
            </blockquote>
            </Card.Body>
            {/*This code snippet adds an "Edit" button to each movie item, allowing users to navigate to the edit page for that specific movie. */}
            <Link to={"/edit/" + props.myMovies._id} className="btn btn-primary">Edit</Link>
            </Card>
        </div>
    );
}



export default MovieItem;