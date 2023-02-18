import { SET_MENU_STATE } from "../actions/SetMenuState"

const initialState = {
    show: false
};

export function menu(state = initialState, action) {
    switch (action.type) {
        case SET_MENU_STATE: {
            return {...state, ...action.payload};
        }
        default: {
            return state
        }
    }
}
