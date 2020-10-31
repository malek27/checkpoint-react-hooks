import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
function MovieCard({ Title, Description, PostUrl, rate, style, date }) {
  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            variant="top"
            src={PostUrl}
            alt="movie"
            width="200px"
            height="300px"
          />
          <h1>{Title}</h1>
          <h5>{date}</h5>
          <p className="type">{style}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{Description}.</p>
        </div>
        <StarRatingComponent
          className="rating"
          name={"rate" + rate}
          starCount={5}
          editing={false}
          value={rate}
        />
      </div>
    </div>
  );
}

export default MovieCard;
