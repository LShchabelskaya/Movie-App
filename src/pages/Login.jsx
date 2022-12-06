import * as React from 'react';
import FormWrapper from "../components/FormWrapper/FormWrapper";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { changeData } from '../actions/inputs';
import '../components/SignUpSteps/Steps.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formData } = useSelector((state) => state.forms);

    const navigateToAllMovies = () => {
        localStorage.setItem('AUTH_TOKEN', formData.loginPassword);
        navigate('/all_movies');
    };

    const inputHandler = (e) => {
        dispatch(changeData({ [e.target.id]: e.target.value }));
    };

    return ( 
        <FormWrapper headerText={'login'} className={'form-wrapper login'}>
            <input 
                type='text' 
                className='input' 
                name='username'
                value={formData.loginUsername}
                id='loginUsername'
                onChange={(e) => inputHandler(e)} 
            />
            <span>username</span>
            <input 
                type='password' 
                className='input' 
                name='password'
                value={formData.loginPassword}
                id='loginPassword'
                onChange={(e) => inputHandler(e)}
            />
            <span>password</span>
            <button onClick={() => navigateToAllMovies()} className='button'>Login</button>
        </FormWrapper>
    );
};

export default Login;