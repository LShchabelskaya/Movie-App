import axios from 'axios';
import { API_KEY } from '../data/config';

const baseAppConfig = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export async function getPopularMovies(page) {
    const { data } = await baseAppConfig.get(`/movie/popular?api_key=${API_KEY}`, {
        params: {
            page,
        },
    });
    return data;
};

export async function getMovieInfo(id) {
    const { data } = await baseAppConfig.get(`/movie/${id}?api_key=${API_KEY}`);
    return data;
};

export async function searchForMovie(title, page) {
    const { data } = await baseAppConfig.get(`/search/movie?api_key=${API_KEY}`, {
        params: {
            query: title,
            page,
        },
    });
    return data;
};

export async function getLanguages() {
    const { data } = await baseAppConfig.get(`/configuration/languages?api_key=${API_KEY}`);
    return data;
};

export async function getMoviesByFilter(language, genreId, page) {
    const { data } = await baseAppConfig.get(`/discover/movie?api_key=${API_KEY}`, {
        params: {
            with_original_language: language,
            with_genres: genreId,
            page,
        },
    });
    return data;
};

export async function getGenres() {
    const { data: { genres } } = await baseAppConfig.get(`/genre/movie/list?api_key=${API_KEY}`);
    return genres;
};
