export const SET_POPUP_DATA = 'SET_POPUP_DATA';

export const setPopupData = (val) => dispatch => {
    dispatch({
        type: SET_POPUP_DATA,
        payload: val
    });
};
