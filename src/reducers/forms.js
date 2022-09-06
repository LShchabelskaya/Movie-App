import { INCREASE_STEP, DECREASE_STEP, TOGGLE_MODAL, TOGGLE_DATE_MODAL, CHANGE_DATA } from '../actions/inputs';

export const initialState = {
    signUpStep: 1,
    isOpenModal: false,
    isOpenDateModal: false,
    formData: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        loginUsername: '',
        loginPassword: '',
    },
};

export const formsReducer = function (state = initialState, action) {
    switch (action.type) {
        case INCREASE_STEP:
            return {
                ...state,
                signUpStep: state.signUpStep + 1,
            };
        case DECREASE_STEP:
            return {
                ...state,
                signUpStep: state.signUpStep - 1,
            };
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpenModal: !state.isOpenModal,
            };
        case TOGGLE_DATE_MODAL:
            return {
                ...state,
                isOpenDateModal: !state.isOpenDateModal,
            }
        case CHANGE_DATA:
            return {
                ...state,
                formData: Object.assign(state.formData, action.payload),
            };
        default:
            return state;
    };
};