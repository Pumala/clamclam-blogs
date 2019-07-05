const defaultState = {
    authError: null
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return {
                ...state,
                authError: 'umm'
            }

    }
};

export default authReducer;