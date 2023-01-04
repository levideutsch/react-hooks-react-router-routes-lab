import React from "react";
import { directors } from "../data";

const directorList = directors.map((director) => {
  return <div key={director.name}>
   Name: {director.name}
    <li>
    Movies:  {director.movies}
    </li>
  </div>
})

function Directors() {
  return (
    <div>
      <h1>'Directors Page'</h1>
      {directorList}
    </div>
  )
}

export default Directors;
