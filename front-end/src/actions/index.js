import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

// Login actions
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN })
    let userID = null;
    return axios
        .post('https://ptpt-use-my-tech-4.herokuapp.com/api/auth/login', creds)
        .then(response => {
            console.log('login', response.data,);
            userID = response.data.user_name
            localStorage.setItem('token', response.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        })
        .then(() => dispatch(fetchingUser(userID)))
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
}

// Logout action
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => {
    localStorage.removeItem('token');
    return({ type: LOGOUT_SUCCESS })
}

// Register actions
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
    dispatch({ type: REGISTER })
    let userID = null;
    return axios
        .post('https://ptpt-use-my-tech-4.herokuapp.com/api/auth/register', creds)
        .then(response => { 
            console.log('register', response.data);
            userID = response.data.user_id;
            console.log('register ID', response.data.user_id);
            dispatch({ type: REGISTER_SUCCESS, payload: response.data})
        })
        .then(() => dispatch(fetchingUser(userID)))
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
}

// User actions
export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';

export const fetchingUser = (id) => dispatch => {
    dispatch({ type: FETCHING_USERS })
    return axios
        .get(`https://ptpt-use-my-tech-4.herokuapp.com/api/users/${id}`)
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_USERS_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_USERS_FAILURE, payload: err })
        })
}