export const INCREASE_STEP = '[STEP] Increase Step';
export const DECREASE_STEP = '[STEP] Decrease Step';
export const TOGGLE_MODAL = '[MODAL] Toggle Modal';
export const TOGGLE_DATE_MODAL = '[DATE MODAL] Toggle Modal';
export const CHANGE_DATA = '[DATA] Change Data';

export const increaseStep = () => ({
    type: INCREASE_STEP,
}); 

export const decreaseStep = () => ({
    type: DECREASE_STEP,
});

export const toggleModal = () => ({
    type: TOGGLE_MODAL,
});

export const toggleDateModal = () => ({
    type: TOGGLE_DATE_MODAL,
});

export const changeData = (data) => {
    return ({
        type: CHANGE_DATA,
        payload: data,
    })
};