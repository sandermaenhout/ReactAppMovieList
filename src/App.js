import React, { Component } from "react";
import MovieList from "./MovieList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">BestMovies</h1>
        </header>
        <main>
          <section className="movies-block">
            <h2 className="hide">Movies</h2>
            <MovieList />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
