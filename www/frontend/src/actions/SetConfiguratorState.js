export const SET_CONFIGURATOR_STATE = 'SET_CONFIGURATOR_STATE';

export const setConfiguratorState = (val) => dispatch => {
    dispatch({
        type: SET_CONFIGURATOR_STATE,
        payload: val
    });
};
