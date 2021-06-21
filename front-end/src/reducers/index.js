import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE,
    FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE, 
}

from "../actions";

const initialState = {
    tech: [],
    user: {},
    gettingUser: false,
    loggingIn: false,
    isLoggedIn: false,
    isRegistered: false,
    error: null,
    user_id: null,
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {

// Login 
        case LOGIN:
            return {
                ...state,
                loggingIn: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: true,
                error: null,
                user_id: action.payload.user_id,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }

// Logout 
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: false,
                isRegistered: false,
                error: null,
                user_id: null
            }

// Getting Users 
        case FETCHING_USERS:
            return {
                ...state,
                gettingUser: true,
                error: null,
            }
        case FETCHING_USERS_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                error: null,
                user: action.payload
            }
        case FETCHING_USERS_FAILURE:
            return {
                ...state,
                gettingUser: false,
                error: action.payload
            }

// Register User 
        case REGISTER:
            return {
                ...state,
                isRegistered: true,
                error: null,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: false,
                isLoggedIn: true,
                user_id: action.payload.id,
                error: null,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistered: false,
                error: action.payload
            }

            default:
                return state;
        }
    }
    
    export default reducer;