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
            console.log('SUCCESSFUL LOGIN!!!');
            return {
                ...state,
                authError: null
            }
        default:
            return {
                ...state,
                authError: null
            }

    }
};

export default authReducer;