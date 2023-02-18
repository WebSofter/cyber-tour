export const SET_MUSIC_DATA = 'SET_MUSIC_DATA';
export const STOP_POPUP_MUSIC = 'STOP_POPUP_MUSIC';
export const STOP_MAIN_MUSIC = 'STOP_MAIN_MUSIC';
export const PLAY_MAIN_MUSIC = 'RESET_MAIN_MUSIC';

export const setMusicData = (val) => dispatch => {
    dispatch({
        type: SET_MUSIC_DATA,
        payload: val
    });
};

export const stopPopupMusic = () => dispatch => {
    dispatch({
        type: STOP_POPUP_MUSIC
    });
};

export const playMainMusic = () => dispatch => {
    dispatch({
        type: PLAY_MAIN_MUSIC
    });
};

export const stopMainMusic = (val) => dispatch => {
    dispatch({
        type: STOP_MAIN_MUSIC,
        payload: val
    });
};
