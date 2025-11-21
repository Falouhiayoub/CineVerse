import React from 'react'
import { useParams } from "react-router-dom";
import '../index.css';
import movies from '../data/moviesList';

const Details = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main className="movie-page">
      <article className="movieCard">
        <div className="movie-media">
          <img className="poster" src={movie.image} alt={movie.title} />
          <p className="movie-actors-below">
            Actors: <span className="acteurs">{movie.acteurs}</span>
          </p>
        </div>
        <div className="movie-info">
          <div className="rating">⭐ 8/10</div>

          <div className="meta-line">
            <span className="year">{movie.year}</span> |
            <span className="category">{movie.category}</span> |
            <span className="country">{movie.country}</span>
          </div>

          <p className="description">{movie.decription}</p>
        </div>
      </article>
    </main>
  );
}

export default Details;

