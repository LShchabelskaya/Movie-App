import './FormWrapper.css';
import React from 'react';

function FormWrapper({ headerText, className, children }) {


    return (
        <div className={className}>
            <h2 className='header'>{headerText}</h2>
            <form>{children}</form>
        </div>
    )
};

export default FormWrapper;