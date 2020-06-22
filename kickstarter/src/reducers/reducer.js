import * as authAction from '../actions/action';

const initialState = {
    username: '',
    password: '',
    error: '',
    user_data: [],
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
                isFetching: false,
            }
        case authAction.REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
