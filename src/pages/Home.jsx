import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div className="container">
      <h1>Films du moment</h1>
      <div className="grid">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Home;
