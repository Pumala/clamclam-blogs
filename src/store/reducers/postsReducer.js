const defaultState = {
    postErr: null
};

const postsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CREATE_POST_SUCCESS':
            return {
                ...state,
                postErr: null
            };
        case 'CREATE_POST_ERROR':
            return {
                ...state,
                postErr: action.err.message
            };
        default:
            return {
                ...state,
                postErr: null
            };

    }
};

export default postsReducer;