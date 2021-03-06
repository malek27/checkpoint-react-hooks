import React from "react";
import MovieCard from "./MovieCard/MovieCard";
function movieList({ movies, textSearch, searchRate }) {
  return (
    <div className="cardlist">
      {movies
        .filter(
          (el) =>
            el.Title.toLowerCase().includes(textSearch.toLowerCase()) &&
            el.rate >= searchRate
        )
        .map((el, i) => (
          <MovieCard
            key={el.id}
            Title={el.Title}
            date={el.date}
            style={el.style}
            Description={el.Description}
            PostUrl={el.PostUrl}
            rate={el.rate}
          />
        ))}
    </div>
  );
}

export default movieList;
