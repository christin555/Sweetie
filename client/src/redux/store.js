import {combineReducers, createStore} from "redux";
import storyReducer from "./story-reducer";
import postReducer from "./post-reducer";
import directReducer from "./direct-reducer";

let reducers = combineReducers({
    storyReducer: storyReducer,
    postReducer: postReducer,
    directReducer: directReducer
})
let store = createStore(reducers);

export default store;