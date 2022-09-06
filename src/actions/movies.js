export const LOAD_MOVIES_SUCCESS = '[MOVIES] Load Movies Success';
export const LOAD_MOVIES_ERROR = '[MOVIES] Load Movies Error';
export const LOAD_MOVIE_SUCCESS = '[MOVIE] Load Movie Success';
export const LOAD_MOVIE_ERROR = '[MOVIE] Load Movie Error';
export const SET_SEARCH_VALUE = '[VALUE] Set Search Value';
export const SET_LANGUAGES = '[LANGUAGES] Set Languages';
export const SET_CURRENT_LANGUAGE = '[LANGUAGES] Set Current language';
export const SET_GENRES = '[GENRES] Set Genres';
export const SET_SELECTED_GENRES = '[GENRES] Set Selected Genres';
export const ADD_TO_FAVORITES = '[Movie] Add To Favorites';

export const loadMoviesSuccess = (movies, pageCount) => ({
    type: LOAD_MOVIES_SUCCESS,
    payload: { movies, pageCount },
});

export const loadMoviesError = (error) => ({
    type: LOAD_MOVIES_ERROR,
    payload: { error },
});

export const loadMovieSuccess = (movie) => ({
    type: LOAD_MOVIE_SUCCESS,
    payload: { movie },
});

export const loadMovieError = (error) => ({
    type: LOAD_MOVIE_ERROR,
    payload: { error },
});

export const setSearchValue = (value) => ({
    type: SET_SEARCH_VALUE,
    payload: value,
});

export const setLanguages = (languages) => ({
    type: SET_LANGUAGES,
    payload: { languages },
});

export const setCurrentLanguage = (language) => ({
    type: SET_CURRENT_LANGUAGE,
    payload: language,
});

export const setGenres = (genres) => ({
    type: SET_GENRES,
    payload: { genres },
});

export const setSelectedGenres = (selectedGenres) => ({
    type: SET_SELECTED_GENRES,
    payload: selectedGenres,
});

export const addToFavorites = (favoriteMovie) => ({
    type: ADD_TO_FAVORITES,
    payload: { favoriteMovie },
});