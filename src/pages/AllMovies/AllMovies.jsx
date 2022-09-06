import MoviesList from '../../components/MoviesList/MoviesList';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AllMovies.css';
import { fetchMovies, fetchSearch } from '../../thunk/movies';
import { loadMoviesSuccess, setCurrentLanguage } from '../../actions/movies';
import MoviesPagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import GenreTags from '../../components/GenreTags/GenreTags';

function AllMovies() {
    const { movies, pageCount, search, currentLanguage, selectedGenres, favorites } = useSelector((state) => {
        return state.movies;
    });
    const [page, setPage] = useState(1);
    const [isFavoriteClicked, setFavoriteClicked] = useState(false)
    const dispatch = useDispatch();
    const prevSearch = useRef('');
    const prevLang = useRef('');
    const prevGenre = useRef('');
    const prevFav = useRef(false);

    useEffect(() => {
        if (!currentLanguage && !selectedGenres) {
            if (!search) {
                dispatch(fetchMovies(page));
            } else {
                dispatch(fetchSearch(search, page));
            }

        }
        if (
            (!prevSearch.current.length && search.length) ||
            (!search.length && prevSearch.current.length) ||
            (prevLang.current !== currentLanguage) ||
            (prevGenre.current !== selectedGenres)
        ) {
            setPage(1);
        }


        if (!prevSearch.current.length && search.length && currentLanguage) {
            dispatch(setCurrentLanguage(''))
        }
        prevSearch.current = search;
        prevLang.current = currentLanguage;
        prevGenre.current = selectedGenres;
    }, [dispatch, page, search, currentLanguage, selectedGenres]);

    useEffect(() => {
        if(prevFav.current && !isFavoriteClicked) {
            dispatch(fetchMovies(1))
        }

        prevFav.current = isFavoriteClicked;
    }, [dispatch, isFavoriteClicked])

    const changePage = (_, value) => {
        setPage(value);
    };

    const favoriteHandler = (e) => {
        setFavoriteClicked(!isFavoriteClicked);
        dispatch(loadMoviesSuccess(favorites));
        !isFavoriteClicked ? 
            e.target.classList.add('active') : 
            e.target.classList.remove('active');
    };

    return (
        <div className='movies-page-wrapper'>
            <div className='container'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SearchBar />
                    <div className='favorites' onClick={(e) => favoriteHandler(e)}>
                        🤍 Check your favorites 💙
                    </div>
                </div>
                <div className='line-divide' />
                <LanguageSelector page={page} />
                <div style={{ display: 'flex', alignContent: 'center' }}>
                    <GenreTags page={page} />
                </div>
                <div className='line-divide' />
                <MoviesPagination page={page} changePage={changePage} count={pageCount} />
                <MoviesList movies={movies} />
            </div>
        </div>
    );
};

export default AllMovies;