import {
    LOGIN,
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGOUT_SUCCESS,
    REGISTER, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    // FETCHING_USERS, 
    // FETCHING_USERS_SUCCESS, 
    // FETCHING_USERS_FAILURE, 
    FETCHING_TECH, 
    FETCHING_TECH_SUCCESS, 
    FETCHING_TECH_FAILURE,
    TECH_DETAIL,
    TECH_DETAIL_SUCCESS,
    DELETE_TECH, 
    DELETE_TECH_SUCCESS, 
    DELETE_TECH_FAILURE,
    // UPDATE_TECH, UPDATE_TECH_SUCCESS, UPDATE_TECH_FAILURE,
    ADD_TECH, 
    ADD_TECH_SUCCESS, 
    ADD_TECH_FAILURE, 
    EDIT_TECH,
    EDIT_TECH_SUCCESS
}

from "../actions";

const initialState = {
    loggingIn: false,
    error: null,
    token: localStorage.getItem('token'),
    signingUp: false,
    addingTech: false,
    fetchingTech: false,
    owner: null,
    items: [],
    gettingDetail: false,
    item: {},
    deletingTech: false,
    editingTech: false
};

export const reducer = ( state = initialState, action ) => {
    switch(action.type) {

// Login 
        case LOGIN:
            return {
               ...state,
               loggingIn: true
           };
        case LOGIN_SUCCESS:
          console.log(action.payload)
            return {
               ...state,
               loggingIn: false,
               token: action.payload.token,
               owner: action.payload.id
           };
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
        // case FETCHING_USERS:
        //     return {
        //         ...state,
        //         gettingUser: true,
        //         error: null,
        //     }
        // case FETCHING_USERS_SUCCESS:
        //     return {
        //         ...state,
        //         gettingUser: false,
        //         error: null,
        //         user: action.payload
        //     }
        // case FETCHING_USERS_FAILURE:
        //     return {
        //         ...state,
        //         gettingUser: false,
        //         error: action.payload
        //     }

// Register User 
        case REGISTER:
            return {
               ...state,
               isRegistered: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: false
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistered: false
            };
        
        
        // Getting tech
        case FETCHING_TECH:
            return {
                ...state,
                gettingTech: true
            };
        case FETCHING_TECH_SUCCESS:
            return {
                ...state,
                gettingTech: false,
                items: action.payload
            };
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
                tech: [...state.tech,{ ...action.payload, user: state.user.username}],
                error: null
             }
        case ADD_TECH_FAILURE:
             return {
                ...state,
                 addingTech: false,
                 error: action.payload
            }

        //Tech Detail
        case TECH_DETAIL:
             return {
                ...state,
                gettingDetail: true,
            }
        case TECH_DETAIL_SUCCESS:
             console.log(action.payload)
             return {
                ...state,
                item: action.payload
            }

        // Deleting tech
        case DELETE_TECH:
            return {
                ...state,
                deletingTech: true
            }
        case DELETE_TECH_SUCCESS:
            return {
                ...state,
                deletingTech: false,
                item: action.payload
            }
        case DELETE_TECH_FAILURE:
            return {
                ...state,
                deletingTech: false,
                error: action.payload
             }
        
        //Edit Tech
        case EDIT_TECH:
            return {
                ...state,
                editingTech: true,
            }
        case EDIT_TECH_SUCCESS:
            return {
                ...state,
                editingTech: false,
                item: action.payload
            }

            default:
                return state;
        }
    }



    
    