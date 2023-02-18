import {PLAY_MAIN_MUSIC, STOP_MAIN_MUSIC, SET_MUSIC_DATA, STOP_POPUP_MUSIC} from "../actions/SetMusicData"

const initialState = {

};

export function music(state = initialState, action) {
    switch (action.type) {
        case SET_MUSIC_DATA: {
            return {...state, ...action.payload};
        }
    
        case STOP_POPUP_MUSIC: {
            let newObj = {...state};
            
            for (let prop in newObj) {
                if (newObj.hasOwnProperty(prop)) {
                    if (newObj[prop].type === 'popup') newObj[prop].playing = false;
                }
            }
            
            return newObj;
        }
        
        case PLAY_MAIN_MUSIC: {
            let newObj = {...state};
    
            for (let prop in newObj) {
                if (newObj.hasOwnProperty(prop)) {
                    if (newObj[prop].main && (newObj[prop].pausedBy === 'popup')) newObj[prop].playing = true;
                }
            }
    
            return newObj;
        }
        
        case STOP_MAIN_MUSIC: {
            let newObj = {...state};
    
            for (let prop in newObj) {
                if (newObj.hasOwnProperty(prop)) {
                    if (newObj[prop].main && newObj[prop].playing) {
                        newObj[prop].playing = false;
                        newObj[prop].pausedBy = action.payload;
                    }
                }
            }
    
            return newObj;
        }
        
        default: {
            return state
        }
    }
}
