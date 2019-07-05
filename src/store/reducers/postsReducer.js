const defaultState = {
    postErr: null,
    userPosts: []
};

const postsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_USER_POSTS':
            return {
                ...state,
                postErr: null,
                userPosts: action.userPosts
            }
        case 'CREATE_POST_SUCCESS':
            return {
                ...state,
                postErr: null,
                userPosts: []
            };
        case 'CREATE_POST_ERROR':
            return {
                ...state,
                postErr: action.err.message,
                userPosts: []
            };
        default:
            return {
                ...state,
                postErr: null
            };

    }
};

export default postsReducer;