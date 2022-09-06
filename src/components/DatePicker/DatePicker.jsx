import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { changeData } from '../../actions/inputs';
import { useDispatch } from 'react-redux';

function DatePicker({ inputHandler }) {
    const [value, setValue] = React.useState(dayjs('1990-01-01T21:11:54'));
    const dispatch = useDispatch();

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(changeData({ dateOfBirth: value.$d }));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={{margin: '20px'}}>
                <DesktopDatePicker
                    label="Date of birth"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default DatePicker;
