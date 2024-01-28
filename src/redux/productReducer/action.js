import axios from "axios";
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"

// Action to add a new product
export const addProduct = (newProduct) => (dispatch) => {
    // Dispatching a product request action to indicate the start of the request
    dispatch({ type: PRODUCT_REQUEST });

    // Making a POST request to add a new product
    axios.post("http://localhost:8080/products", newProduct)
        .then((res) => {
            // Dispatching a success action after successfully adding the product
            dispatch({ type: POST_PRODUCT_SUCCESS });
        })
        .catch((err) => {
            // Dispatching a failure action in case of an error
            dispatch({ type: PRODUCT_FAILURE });
        })
}

// Action to get products based on parameters
export const getProducts = (paramsObj) => (dispatch) => {
    // Dispatching a product request action to indicate the start of the request
    dispatch({ type: PRODUCT_REQUEST });

    // Making a GET request to retrieve products with optional parameters
    axios.get("http://localhost:8080/products", { params: paramsObj })
        .then((res) => {
            // Dispatching a success action with the retrieved data
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            // Dispatching a failure action in case of an error
            dispatch({ type: PRODUCT_FAILURE });
        })
}
