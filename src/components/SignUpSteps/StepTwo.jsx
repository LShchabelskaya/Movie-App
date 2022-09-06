import './Steps.css';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseStep, toggleModal } from '../../actions/inputs';
import { useNavigate } from 'react-router';
import SimpleDialog from '../SimpleDialog/SimpleDialog';
import FormWrapper from '../FormWrapper/FormWrapper';
import { changeData } from '../../actions/inputs';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schemaPassword = yup.string().min(6).required();
const schemaUsername = yup.string().min(6).matches(/^[a-z][A-Za-z0-9._]+$/).required();

const notifyMatch = () => toast.error('Passwords should coincide!');
const notifyPassword = () => toast.error('Passwords: 6 symbols minimum. / Can\'t be empty.');
const notifyUsername = () => toast.error('Username: 6 symbols minimum. / Should start with a lowercase letter. / Should contain alphanumeric characters, underscore or dot. / Can\'t be empty.');

function StepTwo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isOpenModal, formData } = useSelector((state) => state.forms);
    const [isValid, setIsValid] = useState({
        passwordIsValid: true,
        confirmPasswordIsValid: true,
        usernameIsValid: true,
    });

    const validateSecStep = async () => {
        const passwordIsValid = await schemaPassword.isValid(formData.password);
        const confirmPasswordIsValid = await schemaPassword.isValid(formData.confirmPassword);
        const usernameIsValid = await schemaUsername.isValid(formData.username);

        setIsValid({
            ...isValid,
            passwordIsValid,
            confirmPasswordIsValid,
        });

        if(!usernameIsValid) {
            notifyUsername();
        } else if(!passwordIsValid || !confirmPasswordIsValid) {
            notifyPassword()
        } else if(formData.password !== formData.confirmPassword) {
            notifyMatch();
        } else {
            dispatch(toggleModal());
        }
    };

    const stepBack = (e) => {
        e.preventDefault();
        dispatch(decreaseStep());
    };

    const finishSignUp = (e) => {
        e.preventDefault();
        validateSecStep();
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    const inputHandler = (e) => {
        dispatch(changeData({ [e.target.id]: e.target.value }));
    };

    return (
        <FormWrapper headerText={'sign in'} className={'form-wrapper sign-up'}>
                <input 
                    type='text' 
                    className='input' 
                    name='username'
                    value={formData.username}
                    id='username'
                    onChange={(e) => inputHandler(e)} 
                />
                <span>username</span>
                <input 
                    type='password' 
                    className='input' 
                    name='password'
                    value={formData.password}
                    id='password'
                    onChange={(e) => inputHandler(e)} 
                />
                <span>password</span>
                <input 
                    type='password' 
                    className='input' 
                    name='confirm_password'
                    value={formData.confirmPassword}
                    id='confirmPassword'
                    onChange={(e) => inputHandler(e)} 
                />
                <span>confirm password</span>
                <div className='btns-wrapper'>
                    <button onClick={stepBack} className='button second-step'>Back</button>
                    <button onClick={finishSignUp} className='button second-step'>Finish</button>
                </div>
                <ToastContainer />
                <SimpleDialog 
                    onClose={() => dispatch(toggleModal())}
                    open={isOpenModal}
                    text={'🧝🏻‍♀️ You\'re all set!'}
                >
                    <button onClick={() => navigateToLogin()} className='button modal'>Go to login page</button>
                </SimpleDialog>
        </FormWrapper>
    );
};

export default StepTwo;