import { SET_POPUP_DATA } from "../actions/SetPopupData"

const initialState = {
    show: false,
    data: {}
};

export function popup(state = initialState, action) {
    switch (action.type) {
        case SET_POPUP_DATA: {
            return {...state, ...action.payload};
        }
        default: {
            return state
        }
    }
}
