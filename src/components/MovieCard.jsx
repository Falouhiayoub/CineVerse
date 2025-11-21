import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/details/${movie.id}`} className="movie-card">
        <img src={movie.image} alt={movie.name} />
      </Link>
    </div>
  );
};

export default MovieCard;