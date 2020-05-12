import {combineReducers, createStore} from "redux";
import storyReducer from "./story-reducer";
import postReducer from "./post-reducer";

let reducers = combineReducers({
    storyReducer: storyReducer,
    postReducer: postReducer,
})
let store = createStore(reducers);

export default store;