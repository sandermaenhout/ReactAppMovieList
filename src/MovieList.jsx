import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  render = () => {
    return (
      <div>
        <ul>
          <MovieItem title="Fast and Furious 6" rating="9" genre="Actie" />
          <MovieItem title="Santa Claus" rating="7" genre="Horror" />
          <MovieItem title="Cars 3" rating="4" genre="Family" />
        </ul>
      </div>
    );
  };
}

export default MovieList;
