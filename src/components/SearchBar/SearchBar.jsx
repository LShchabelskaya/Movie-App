import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {setSearchValue} from '../../actions/movies';

function SearchBar() {
    const { search, currentLanguage, selectedGenres } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentLanguage || selectedGenres) {
            dispatch(setSearchValue(''))
        }
    }, [dispatch, currentLanguage, selectedGenres]);
    
    const onChangeHandler = (e) => {
        dispatch(setSearchValue(e.target.value));
    };

    return (
        <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700, margin: '30px auto' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search...'
                inputProps={{ 'aria-label': 'search...' }}
                value={search}
                onChange={onChangeHandler}
            />
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;