import './MovieCard.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../actions/movies';
import React from 'react';

function MovieCard() {
    const { selectedMovie, favorites } = useSelector((state) => state.movies);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateToAllMovies = () => {
        navigate('/all_movies');
    };

    const addFavoriteHandler = (e, id) => {
        const duplicate = favorites.find((item => item.id === selectedMovie.id));
        if(!duplicate) {
            e.preventDefault();
            dispatch(addToFavorites(selectedMovie));
        };
    };

    return (
        <div id='mainContainer'>
            <div id='poster' style={{ background: `url(https://image.tmdb.org/t/p/w500${selectedMovie.poster_path})` }} />
            <div id='info'>
                <h1>{selectedMovie.title}</h1>
                <h4>{selectedMovie.release_date} | {selectedMovie.original_title} | {selectedMovie.runtime} m</h4>
                <p>{selectedMovie.overview}</p>
                <div className='btns-wrapper'>
                    <button onClick={navigateToAllMovies} className='button'>Back to movies</button>
                    <button onClick={addFavoriteHandler} className='button'>Add to favorite</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

