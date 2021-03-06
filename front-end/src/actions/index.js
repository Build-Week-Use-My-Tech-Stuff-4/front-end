

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
            userID = response.data.username
            localStorage.setItem('token', response.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        })
        .then(() => dispatch(userID))
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
        .then(() => dispatch(userID))
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
        .get(`https://ptpt-use-my-tech-4.herokuapp.com/api/users/{user_id}`)
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_USERS_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_USERS_FAILURE, payload: err })
        })
}

export const FETCHING_TECH = 'FETCHING_TECH';
export const FETCHING_TECH_SUCCESS = 'FETCHING_TECH_SUCCESS';
export const FETCHING_TECH_FAILURE = 'FETCHING_TECH_FAILURE';

export const fetchingTech = item => dispatch => {
    dispatch ({type: FETCHING_TECH});
    return axios.get('https://ptpt-use-my-tech-4.herokuapp.com/api/items', item).then(res => {
        dispatch ({type: FETCHING_TECH_SUCCESS, payload: res.data})
    })
        .catch(err => {
            dispatch({ type: FETCHING_TECH_FAILURE, payload: err })
        })
}

export const TECH_DETAIL = 'TECH_DETAIL';
export const TECH_DETAIL_SUCCESS = 'TECH_DETAIL_SUCCESS';
export const TECH_DETAIL_FAILURE = 'ITEM_DETAIL_FAILURE';

export const techDetail = id => dispatch => {
    dispatch ({type: TECH_DETAIL});
    // const headers = {Authorization: localStorage.getItem('token')}
    return axios.get('https://ptpt-use-my-tech-4.herokuapp.com/api/items/{item_id}').then(res => {
        console.log(res)
        dispatch({type: TECH_DETAIL_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: TECH_DETAIL_FAILURE, payload: err })
    })
}

export const ADD_TECH = 'ADD_TECH';
export const ADD_TECH_SUCCESS = 'ADD_TECH_SUCCESS';
export const ADD_TECH_FAILURE = 'ADD_TECH_FAILURE';

export const addingTech = item => dispatch => {
    dispatch ({type: ADD_TECH});
    const headers = {Authorization: localStorage.getItem('token')}
    return axios.post(
        'https://ptpt-use-my-tech-4.herokuapp.com/api/items', 
        item,
        {headers: headers} 
    ).then(res => {
        console.log(res)
        dispatch ({type: ADD_TECH_SUCCESS, payload: res.data})
    })
        .catch(err => {
            dispatch({ type: ADD_TECH_FAILURE, payload: err })
        })
}

export const DELETE_TECH = 'DELETE_TECH';
export const DELETE_TECH_SUCCESS = 'DELETE_TECH_SUCCESS';
export const DELETE_TECH_FAILURE = 'DELETE_TECH_FAILURE';

export const deleteTech = id => dispatch => {
    dispatch({ type: DELETE_TECH });
  return axios
    .delete('https://ptpt-use-my-tech-4.herokuapp.com/api/items/{item_id}' + id, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: DELETE_TECH_SUCCESS, payload: res.data });
    })
        .catch(err => {
            dispatch({ type: DELETE_TECH_FAILURE, payload: err })
        })
}

export const EDIT_TECH = 'UPDATE_TECH';
export const EDIT_TECH_SUCCESS = 'UPDATE_TECH_SUCCESS';
export const UPDATE_TECH_FAILURE = 'UPDATE_TECH_FAILURE';

//tech parameter might change due to endpoints placeholder for now
export const editTech = item => dispatch => {
    dispatch({ type: EDIT_TECH });
  console.log(item.id)
  return axios
    .put(`https://ptpt-use-my-tech-4.herokuapp.com/api/items/{item_id}`, item, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: EDIT_TECH_SUCCESS, payload: res.data });
    })
        .catch(err => {
            dispatch({ type: UPDATE_TECH_FAILURE, payload: err })
        })
}

// Stretch
export const ADD_REVIEW = 'ADD_REVIEW';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE'

export const addingReview = (review) => dispatch => {
    dispatch({ type: ADD_REVIEW })
    axiosWithAuth()
        .post('', review)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADD_REVIEW_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ADD_REVIEW_FAILURE, payload: err })
        })
}