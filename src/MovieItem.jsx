import React, { Component } from "react";

class MovieItem extends Component {
  render = () => {
    const { rating, title, genre } = this.props;
    return (
      <li>
        <img src="" alt="Movies" />
        <p>{title}</p>
        <p>{rating}/10</p>
        <p>{genre}</p>
      </li>
    );
  };
}

export default MovieItem;
