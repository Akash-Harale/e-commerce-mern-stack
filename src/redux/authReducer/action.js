import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,  } from "../actionTypes"

export const login = (userData, toast) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
     axios.post(`https://reqres.in/api/login`, userData)
        .then((res) => {
            console.log(res.data)    
               toast.success("Logged in successfully")
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err?.response?.status)
            if (err?.response?.status === 400) {
                toast.error("Invalid Credentials")
            } else {
                toast.error(err?.message)
            }
            dispatch({type:LOGIN_FAILURE, payload: err.message} )
    })
}
