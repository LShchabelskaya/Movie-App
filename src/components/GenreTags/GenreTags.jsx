import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, fetchByFilter } from '../../thunk/movies';
import { setSelectedGenres } from '../../actions/movies';
import './GenreTags.css';

function getIsoLang(languages, name) {
    return languages.find((item) => item.english_name === name).iso_639_1;
}

function GenreTags({ page }) {
    const dispatch = useDispatch();
    const { genres, currentLanguage, selectedGenres, languages } = useSelector(state => state.movies);
    const prevPage = useRef(page);
    const isoLang = languages && currentLanguage ?  getIsoLang(languages, currentLanguage) : '';
    
    useEffect(() => {
        
        if (!genres.length) {
            dispatch(fetchGenres());
        }
        if(prevPage.current !== page && selectedGenres.length) {
            dispatch(fetchByFilter(isoLang, selectedGenres, page));
        }
        prevPage.current = page;

    }, [dispatch, selectedGenres, currentLanguage, languages, page, genres.length, isoLang]);

    useEffect(() => {
        dispatch(fetchByFilter(isoLang, selectedGenres, 1));
    }, [dispatch, isoLang, selectedGenres])

    const handleClick = (e, id) => {
        if(selectedGenres && !selectedGenres.includes(`${id}`)) {
            dispatch(setSelectedGenres(selectedGenres + `,${id}`));
            e.target.classList.add('active');
        } else if(selectedGenres.includes(`${id}`)) {
            e.target.classList.remove('active');
            const updGenres = selectedGenres.split(',').filter(item => item !== `${id}`).join();
            dispatch(setSelectedGenres(updGenres));
        } else {
            dispatch(setSelectedGenres(`${id}`));
            e.target.classList.add('active');
        };
    };

    return (
        <div className='tags-wrapper'>
            {genres.map((item) => {
                return (
                    <div className='tag' key={item.id} onClick={(e) => handleClick(e, item.id)}>
                        {item.name}
                    </div>
                )
            })}
        </div>    
    );
};

export default GenreTags;
