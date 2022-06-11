import { actionType } from '../constants/actionType'

export const setAllPosts = (posts) => {
    // console.log('Action called !!!',posts.length)
    return {
        type: actionType.SET_POSTS,
        payload:posts,
    }
}

// export const setPost = (userInfo) => {
//     return {
//         type: actionType.RESET_USER,
//         payload:userInfo,
//     }
// }