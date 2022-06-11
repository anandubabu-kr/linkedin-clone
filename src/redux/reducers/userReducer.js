import { actionType } from '../constants/actionType'


const initialState = {
    user: undefined
}

export const userReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_USER:
            return {user:payload}
        default:
            return state
    }
}