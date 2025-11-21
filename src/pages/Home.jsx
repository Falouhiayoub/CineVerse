import movies from "../data/moviesList";
import MovieCard from "../components/MovieCard";
const Home = () => {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};


export default Home;

