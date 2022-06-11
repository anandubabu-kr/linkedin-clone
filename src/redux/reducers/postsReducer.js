import { actionType } from '../constants/actionType'


const initialState = {
    posts: []
} 

export const postsReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_POSTS:
            return {posts:payload}
        default:
            return state
    }
}