import React from 'react'
import '../index.css'
const Details = () => {
return (
    <main className="movie-page">
        <article className="movie-card">
            <div className="movie-media">
                <img className="poster" src="" alt="Movie Poster" />
                <p className="movie-actors-below">Actors: <span className="acteurs">Alice Smith, Bob Jones, Charlie Nguyen</span></p>
            </div>
            <div className="movie-info">
                <div className="rating">⭐ 8.2 / 10</div>
                <div className="meta-line">
                    <span className="year">2028</span>|
                    <span className="category">Drama</span>|
                    <span className="country">USA</span>
                </div>
                <p className="description">
                    A bold, cinematic story about chance and consequence — <strong>The Example Movie</strong>
                    follows a small group's unlikely journey through tension, laughter and heart.
                    Filled with vivid characters, unforgettable moments and a pulse-driving soundtrack,
                    this film invites you to feel every turn. Watch for striking visuals and a finale that <br/>
                    leaves you thinking long after the credits roll.
                </p>
            </div>
        </article>
    </main>
)
}

export default Details
