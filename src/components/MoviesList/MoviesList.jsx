import './MoviesList.css';
import { useNavigate } from 'react-router-dom';
import imgMy from '../../imges/not_available.png'
import React from 'react';

function MoviesList( { movies } ) {
    const navigate = useNavigate();

    const navigateToMovieInfo = (movieId) => {
        navigate(`/all_movies/${movieId}`);
    };

    return (
        <div className='movies'>
            {movies.map((movie) => (
                <div className='movie' key={movie.id} onClick={() => navigateToMovieInfo(movie.id)}>
                    <div className='movieCoverInner'>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : imgMy} className='movieCover' alt='Movie poster' />
                    </div>
                    <div className='movieInfo'>
                        <div className='titleContainer'>
                            <div className='movieTitle'>{movie.title}</div>
                            <div className='movieDate'>{movie.release_date}</div>
                        </div>
                        <div className='overview'>{movie.overview}</div>
                    </div>
                </div>
                )
            )}
        </div>
    );
};

export default MoviesList;