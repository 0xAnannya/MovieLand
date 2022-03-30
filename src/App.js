import {useEffect , useState} from "react";
import "./App.css";
import SearchIcon from"./search.svg";
import MovieCard from "./MovieCard";



const APIurl= 'https://www.omdbapi.com?apikey=403f0ba9';

const movie1=
{
    "Title": "The Amazing Spiderman T4 Premiere Special",
    "Year": "2012",
    "imdbID": "tt2233044",
    "Type": "movie",
    "Poster": "N/A"
}


const App = () =>{

    const[movies,setmovies]=useState([]);
    const[searchTerm, setsearchTerm]=useState('');

        const searchMovies= async(title) =>{
        const response= await fetch(`${APIurl}&s=${title}`);
        const data= await response.json();
        setmovies(data.Search);
    }
    
    
    useEffect(() =>{
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>
        
        <div className="search">
            <input
            placeholder="Search a movie"
            value={searchTerm}
            onChange={(e) => {setsearchTerm(e.target.value)}}
            />

            <img
            src={SearchIcon}
            alt="search"
            onClick={() =>{searchMovies(searchTerm)}}
            />
        </div>
        
        {
            movies?.length >0
            ?( 
            <div className="container">
                {
                    movies.map((movie) =>(
                        <MovieCard movie={movie}/> 
                    ))
                }
            
           </div>    
              ) : (
                  <div className="empty">
                      <h2>Sorry! No movies found. </h2>
                      </div>
                    )

        }
        
        
    </div> 
      
    );

}

export default App;