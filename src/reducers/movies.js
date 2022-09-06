import { LOAD_MOVIES_SUCCESS, LOAD_MOVIE_SUCCESS, SET_SEARCH_VALUE, SET_LANGUAGES, SET_CURRENT_LANGUAGE, SET_GENRES, SET_SELECTED_GENRES, ADD_TO_FAVORITES } from '../actions/movies';

export const initialState = {
    movies: [],
    pageCount: 0,
    languages: [],
    genres: [],
    currentLanguage: '',
    selectedGenres: '',
    selectedMovie: {},
    search: '',
    favorites: [],
};

export const moviesReducer = function(state = initialState, action) {
    switch(action.type) {
            case LOAD_MOVIES_SUCCESS:
                return {
                    ...state,
                    movies: action.payload.movies,
                    pageCount: action.payload.pageCount,
                };
            case LOAD_MOVIE_SUCCESS:
                return {
                    ...state,
                    selectedMovie: { ...action.payload.movie },
                };
            case SET_SEARCH_VALUE:
                return {
                    ...state,
                    search: action.payload,
                };
            case SET_LANGUAGES:
                return {
                    ...state,
                    languages: action.payload.languages,
                };
            case SET_CURRENT_LANGUAGE:
                return {
                    ...state,
                    currentLanguage: action.payload
                };
                case SET_GENRES:
                    return {
                        ...state,
                        genres: action.payload.genres,
                    };
                case SET_SELECTED_GENRES:
                    return {
                        ...state,
                        selectedGenres: action.payload,
                    };
                case ADD_TO_FAVORITES:
                    return {
                        ...state,
                        favorites: [action.payload.favoriteMovie, ...state.favorites],
                    }
                default:
                    return state;
    };
};