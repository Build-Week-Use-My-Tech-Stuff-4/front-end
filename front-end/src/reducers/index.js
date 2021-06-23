import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
    REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE,
    FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE, 
    FETCHING_TECH, FETCHING_TECH_SUCCESS, FETCHING_TECH_FAILURE,
    DELETE_TECH, DELETE_TECH_SUCCESS, DELETE_TECH_FAILURE,
    UPDATE_TECH, UPDATE_TECH_SUCCESS, UPDATE_TECH_FAILURE,
    ADD_TECH, ADD_TECH_SUCCESS, ADD_TECH_FAILURE, 
}

from "../actions";

const initialState = {
    tech: [],
    user: {},
    gettingUser: false,
    loggingIn: false,
    isLoggedIn: false,
    isRegistered: false,
    gettingTech: false,
    addingTech: false,
    deletingTech: false,
    updatingTech: false,
    error: null,
    user_id: null,
}

export const reducer = ( state = initialState, action ) => {
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
        
        
        // Getting tech
        case FETCHING_TECH:
            return {
                ...state,
                gettingTech: true,
                error: null,
            }
        case FETCHING_TECH_SUCCESS:
            console.log('PAYLOAD:',action.payload)
            return {
                ...state,
                tech: action.payload,
                gettingTech: false,
                error: null,
             }
        case FETCHING_TECH_FAILURE:
            return {
                ...state,
                 gettingTech: false,
                 error: action.payload,
             }

        // Adding tech
        case ADD_TECH:
            return {
                ...state,
                addingTech: true,
                error: null
            }
        case ADD_TECH_SUCCESS:
            return {
                 ...state,
                addingTech: false,
                tech: [...state.tech,{ ...action.payload, user: state.user.user_name}],
                error: null
             }
        case ADD_TECH_FAILURE:
             return {
                ...state,
                 addingTech: false,
                 error: action.payload
            }

        // Deleting tech
        case DELETE_TECH:
            return {
                ...state,
                deletingTech: true,
                error: null
             }
        case DELETE_TECH_SUCCESS:
             return {
                 ...state,
                deletingTech: false,
                tech: [...state.tech.filter(item => item.id.toString() !== action.payload.toString())],
                error: null
             }
        case DELETE_TECH_FAILURE:
            return {
                ...state,
                deletingTech: false,
                error: action.payload
             }

        // Updating tech
            // case UPDATE_TECH:
            //     return {
            //         ...state,
            //         updatingTech: true,
            //         error: null,
            // }
            // case UPDATE_TECH_SUCCESS:
            //     return {
            //     ...state,
            //     updatingTech: false,
            //     tech: [...state.tech.map(item => {
            //          if(tech.id.toString() === action.payload.id.toString()) {
            //          item = action.payload
            //          return tech;
            //     } 
            //     return tech;     
            //  })],
            // error: null,
            // }
            // case UPDATE_TECH_FAILURE:
            //     return {
            //     ...state,
            //     updatingTech: false,
            //     error: null
            // }


            default:
                return state;
        }
    }


    
    