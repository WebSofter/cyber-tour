import { SET_CONFIGURATOR_STATE } from "../actions/SetConfiguratorState"

const initialState = {
    activeCategoryId: null,
    selected: {},
    windowWidth: window.innerWidth
};

export function configurator(state = initialState, action) {
    switch (action.type) {
        case SET_CONFIGURATOR_STATE: {
            return {...state, ...action.payload};
        }
        default: {
            return state
        }
    }
}
