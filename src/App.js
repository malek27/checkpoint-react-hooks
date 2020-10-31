import React, { useState } from "react";
import { movieList } from "./component/Data";
import MovieList from "./component/MovieList";
import Add from "./component/Add/Add";
import Filtre from "./component/Filtre/Filtre";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbare from "./Navbar";
import Film from "./component/Film.jpg";
function App() {
  const [movies, setMovies] = useState(movieList);
  const [textSearch, setTextSearch] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const handleAdd = (newMovie) => {
    if (newMovie !== {}) setMovies([...movies, newMovie]);
  };
  return (
    <div>
      <Navbare />
      <header>
        <p>Movie time</p>
        <img src={Film} alt="film" />
      </header>
      <Filtre setSearchRate={setSearchRate} setTextSearch={setTextSearch} />
      <Add handleAdd={handleAdd} />
      <MovieList
        searchRate={searchRate}
        textSearch={textSearch}
        movies={movies}
      />
    </div>
  );
}
export default App;
