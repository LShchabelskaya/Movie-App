import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import { useDispatch } from 'react-redux';
import { fetchMovieById } from '../thunk/movies';

function MovieInfo() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [dispatch, id]);
    
    return <MovieCard />
};

export default MovieInfo;