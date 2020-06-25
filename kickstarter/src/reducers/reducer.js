import * as authAction from '../actions/action';

const initialState = {
    username: '',
    password: '',
    email: '',
    error: '',
    user_data: [],
    data_list: [],
    current_campaign_link: '',
    current_campaign: [],
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
                data_list: action.payload,
                isFetching: false
            }
        case authAction.GET_CURRENT_CAMPAIGN:
            return {
                ...state,
                current_campaign_link: action.payload,
                isFetching: true
            }
        case authAction.GET_CURRENT_CAMPAIGN_SUCCESS:
            return {
                ...state,
                current_campaign: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}
