const defaultState = {
    authError: null
};

const authReducer = (state = defaultState, action) => {
    // console.log('ACTION IN REDUCER:::', action);
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
        case 'SIGN_UP_SUCCESS':
            console.log('SUCCESSFUL LOGIN/SIGN UP!!!');
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
                authError: null
            }

    }
};

export default authReducer;