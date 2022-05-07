import { actionType } from '../constants/actionType'

export const setUser = (userInfo) => {
    return {
        type: actionType.SET_USER,
        payload:userInfo,
    }
}

export const resetUser = (userInfo) => {
    return {
        type: actionType.RESET_USER,
        payload:userInfo,
    }
}