import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postsReducer } from "./postsReducer";

const reducers = combineReducers({
    userInfo: userReducer,
    posts:postsReducer,
})

export default  reducers;