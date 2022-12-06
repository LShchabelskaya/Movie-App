import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <>
        <p className='not-found'> page not found </p>

        <div className='tipsiz'>
            <div className='tipsiz-body'>
                <div className='left-arm arm'></div>
                <div className='face'>
                    <div className='upper-face'>
                        <div className='element'>4</div>
                        <div className='element'>0</div>
                        <div className='element'>4</div>
                    </div>
                    <div className='mouth'></div>
                </div>
                <div className='right-arm arm'></div>
            </div>
        </div>

        <p> maybe you want to go <a href='/all_movies'>back? </a></p>
    </>
    )
};

export default NotFound;