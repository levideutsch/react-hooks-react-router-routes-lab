import React from "react";
import { movies } from "../data";

const movieList = movies.map((movie) => {
  return <div key={movie.title}>
    <div>
   Name: 
   {movie.title}
   </div>

   <div>
   Time: 
   {movie.time}
   </div>

    <div>
      <ul>
        <li>
        genres: 
        {movie.genres}
        </li>
      </ul>
    </div>
    </div> 
})
// console.log(movieList)

function Movies() {
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
