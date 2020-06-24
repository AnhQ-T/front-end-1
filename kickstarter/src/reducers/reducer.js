import * as authAction from '../actions/action';

const initialState = {
    username: '',
    password: '',
    email: '',
    error: '',
    user_data: [],
    data_list: [],
    loggedIn: false,
    isFetching: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case authAction.LOGIN:
            return {
                ...state,
                isFetching: true,
            }
        case authAction.LOGIN_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                loggedIn: true,
                isFetching: false,
            }
        case authAction.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case authAction.REGISTER:
            return {
                ...state,
                isFetching: true,
            }
        case authAction.REGISTER_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                loggedIn: true,
                isFetching: false,
            }
        case authAction.REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case authAction.GET_DATA:
            return {
                ...state,
                isFetching: true
            }
        case authAction.GET_DATA_SUCCESS:
            return {
                ...state,
                data_list: action.payload
            }
        default:
            return state;
    }
}
