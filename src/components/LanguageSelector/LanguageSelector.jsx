import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetchLanguages, fetchByFilter } from '../../thunk/movies';
import { setCurrentLanguage } from '../../actions/movies';

function getIsoLang(languages, name) {
    return languages.find((item) => item.english_name === name).iso_639_1;
}

function LanguageSelector({ page }) {
    const dispatch = useDispatch();
    const { languages, currentLanguage, selectedGenres } = useSelector((state) => state.movies);

    const prevPage = useRef(page);
    useEffect(() => {
        if (!languages.length) {
            dispatch(fetchLanguages());
        }
        if (prevPage.current !== page && currentLanguage.length) {
            const isoLang = getIsoLang(languages, currentLanguage);
            dispatch(fetchByFilter(isoLang, selectedGenres, page));
        }
        prevPage.current = page;
    } , [dispatch, page, currentLanguage, languages, selectedGenres]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        if (!value.length) {
            return;
        };

        dispatch(setCurrentLanguage(value))
        const isoLang = getIsoLang(languages, value);
        
        dispatch(fetchByFilter(isoLang, selectedGenres, 1));
    };
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <FormControl size='small' sx={{ m: 1, width: 920 }} >
                <InputLabel>Language</InputLabel>
                <Select
                    value={currentLanguage}
                    label='Language'
                    onChange={handleChange}
                >
                    <MenuItem value='' onClick={() => dispatch(setCurrentLanguage(''))}>
                        None
                    </MenuItem>
                    {languages.map((item) => {
                        return <MenuItem key={item.iso_639_1} value={item.english_name}>{item.english_name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
};

export default LanguageSelector;
