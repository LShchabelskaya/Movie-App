import { useSelector } from 'react-redux';
import StepOne from '../components/SignUpSteps/StepOne';
import StepTwo from '../components/SignUpSteps/StepTwo';
import React from 'react';

function SignUp() {
    const { signUpStep } = useSelector((state) => state.forms);

    switch (signUpStep) {
        case 1:
            return <StepOne />
        case 2:
            return <StepTwo />
        default:
            return null;
    };
};

export default SignUp;