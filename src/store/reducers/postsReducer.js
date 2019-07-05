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
        case 'UPDATE_POST_SUCCESS':
            return {
                ...state,
                postErr: null,
                userPosts: []
            };
        case 'UPDATE_POST_ERROR':
            return {
                ...state,
                postErr: action.err.message,
                userPosts: null
            }
        case 'DELETE_POST_SUCCESS':
            return {
                ...state,
                postErr: null,
                userPosts: null
            }
        case 'DELETE_POST_ERROR':
            return {
                ...state,
                postErr: action.err.message,
                userPosts: null
            }
        default:
            return {
                ...state,
                postErr: null
            };

    }
};

export default postsReducer;