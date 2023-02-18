import { combineReducers } from "redux";
import { popup } from "./popup";
import { music } from "./music";
import { menu } from "./menu";
import { configurator } from "./configurator";

export const rootReducer = combineReducers({
    popup: popup,
    music: music,
    menu: menu,
    configurator: configurator,
});

