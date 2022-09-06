import * as React from 'react';
import './GenderPicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../../actions/inputs';

export default function GenderPicker() {   
    const { formData } = useSelector((state) => state.forms);
    const dispatch = useDispatch();

    const radioInputHandler = (e) => {
        dispatch(changeData({ gender: e.target.id }));
    };

    return (
        <div className='gender'>
            <input 
                type='radio' 
                value='None' 
                id='male' 
                name='gender' 
                checked={formData.gender === 'male'}
                onChange={(e) => radioInputHandler(e)}
            />
            <label htmlFor='male' className='radio'><p>Male</p></label>
            <input 
                type='radio' 
                value='None' 
                id='female' 
                name='gender'
                checked={formData.gender === 'female'}
                onChange={(e) => radioInputHandler(e)}
            />
            <label htmlFor='female' className='radio'><p>Female</p></label>
            <input 
                type='radio' 
                value='None' 
                id='other' 
                name='gender'
                checked={formData.gender === 'other'}
                onChange={(e) => radioInputHandler(e)}
            />
            <label htmlFor='other' className='radio'><p>Other</p></label>
        </div>
    );
};
