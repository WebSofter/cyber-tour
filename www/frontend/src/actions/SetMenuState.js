export const SET_MENU_STATE = 'SET_MENU_STATE';

export const setMenuState = (val) => dispatch => {
    dispatch({
        type: SET_MENU_STATE,
        payload: val
    });
};
