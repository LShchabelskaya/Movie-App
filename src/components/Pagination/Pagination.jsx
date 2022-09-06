import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MoviesPagination({ page, changePage, count }) {

    return (
        <Stack sx={{alignItems: 'center', backgroundColor: '#eeeeee', marginTop: '10px'}} spacing={2}>
            <Pagination count={count > 500 ? 500 : count} page={page} onChange={changePage} color='primary' />
        </Stack>
    );
};

export default MoviesPagination;