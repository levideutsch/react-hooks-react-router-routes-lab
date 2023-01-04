import React from "react";
import { actors } from "../data";

const actorsList = actors.map((actor) => {
  return <div key={actor.name}> 
    <div>Name: {actor.name}</div>
    <li>Movies: {actor.movies}</li>
  </div>
})

function Actors() {
  return (
    <div>
      <h1>'Actors Page'</h1>
      {actorsList}
    </div>
  )
}

export default Actors;
