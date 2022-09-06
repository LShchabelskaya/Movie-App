import { loadMoviesSuccess, loadMoviesError, loadMovieError, loadMovieSuccess, setLanguages, setGenres } from '../actions/movies';
import { getPopularMovies, getMovieInfo, searchForMovie, getLanguages, getGenres, getMoviesByFilter } from '../api/movie-app-api';

export const fetchMovies = (page) => {
    return async (dispatch) => {
        try {
            const data = await getPopularMovies(page);
            dispatch(loadMoviesSuccess(data.results, data.total_pages));
        } catch(err) {
            dispatch(loadMoviesError(err));
        };
    };
};

export const fetchMovieById = (id) => {
    return async (dispatch) => {
        try {
            const data = await getMovieInfo(id);
            dispatch(loadMovieSuccess(data));
        } catch(err) {
            dispatch(loadMovieError(err));
        };
    };
};

export const fetchSearch = (title, page) => {
    return async (dispatch) => {
        try {
            const data = await searchForMovie(title, page);
            dispatch(loadMoviesSuccess(data.results, data.total_pages));
        } catch(err) {
            dispatch(loadMoviesError(err));
        };
    };
};

export const fetchLanguages = () => {
    return async (dispatch) => {
        const data = await getLanguages();
        dispatch(setLanguages(data));
    };
};

export const fetchByFilter = (language, genreId, page) => {
    return async (dispatch) => {
        const data = await getMoviesByFilter(language, genreId, page);
        dispatch(loadMoviesSuccess(data.results, data.total_pages));
    };
};

export const fetchGenres = () => {
    return async (dispatch) => {
        const data = await getGenres();
        dispatch(setGenres(data));
    };
};