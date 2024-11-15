import { useEffect } from "react";
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
            <Card.Header>{props.myMovies.Title}</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <img src={props.myMovies.Poster}></img>
            {/*Footer adds extra info at the bottom of card*/}
            <footer>{props.myMovies.Year}</footer>
            </blockquote>
            </Card.Body>
            </Card>
        </div>
    );
}



export default MovieItem;