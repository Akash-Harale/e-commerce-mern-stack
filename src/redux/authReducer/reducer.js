import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: null,
    errorMessage: null,
}

export const reducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: 
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true, errorMessage: payload }
        case LOGOUT_SUCCESS:
            return { ...state, isLoading: false, isAuth: false, token: null }
        default:
            return state;
    }
}