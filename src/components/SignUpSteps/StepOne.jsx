import './Steps.css';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { increaseStep } from '../../actions/inputs';
import FormWrapper from '../FormWrapper/FormWrapper';
import DatePicker from '../DatePicker/DatePicker';
import SimpleDialog from '../SimpleDialog/SimpleDialog';
import GenderPicker from '../GenderPicker/GenderPicker';
import { toggleDateModal, changeData } from '../../actions/inputs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schemaName = yup.string().matches(/^[a-zA-Zа-яА-Я]+$/i).required();
const schemaEmail = yup.string().email().required();

const notifyName = () => toast.error('First/Last name: Please use letters only. / Can\'t be empty.');
const notifyEmail = () => toast.error('E-mail format should be qwerty@qwe.com. / Can\'t be empty.');


function StepOne() {
    const dispatch = useDispatch();
    const { isOpenDateModal, formData } = useSelector((state) => state.forms);
    const [isValid, setIsValid] = useState({
        firstNameIsValid: true,
        lastNameIsValid: true,
        emailIsValid: true,
    });

    const validateFirstStep = async () => {
        const firstNameIsValid = await schemaName.isValid(formData.firstName);
        const lastNameIsValid = await schemaName.isValid(formData.lastName);
        const emailIsValid = await schemaEmail.isValid(formData.email);

        setIsValid({
            ...isValid,
            firstNameIsValid,
            lastNameIsValid,
        });

        if (!firstNameIsValid || !lastNameIsValid) {
            notifyName();
        }  else if(!emailIsValid) {
            notifyEmail();
        } else {
            dispatch(increaseStep());
        }
    };

    const stepForwardHandler = (e) => {
        e.preventDefault();
        validateFirstStep();

    };

    const dateModalHandler = (e) => {
        e.preventDefault();
        dispatch(toggleDateModal());
    };

    const inputHandler = (e) => {
        dispatch(changeData({ [e.target.id]: e.target.value }));
    };

    return (
        <FormWrapper headerText={'sign up'} className={'form-wrapper sign-up'}>
            <input
                type='text'
                className='input'
                name='first_name'
                value={formData.firstName}
                id='firstName'
                onChange={(e) => inputHandler(e)}
            />
            <span>first name</span>
            <input
                type='text'
                className='input'
                name='last_name'
                value={formData.lastName}
                id='lastName'
                onChange={(e) => inputHandler(e)}
            />
            <span>last name</span>
            <input
                type='text'
                className='input'
                name='e-mail'
                value={formData.email}
                id='email'
                onChange={(e) => inputHandler(e)}
            />
            <span>e-mail</span>
            <SimpleDialog
                onClose={() => dispatch(toggleDateModal())}
                open={isOpenDateModal}
                text={'🎁'}
            >
                <DatePicker />
            </SimpleDialog>

            <button onClick={dateModalHandler} className='button date-picker'>Add your birthday</button>
            <GenderPicker />
            <button onClick={stepForwardHandler} className='button'>Continue</button>
            <ToastContainer />
        </FormWrapper>
    );
};

export default StepOne;