const defaultState = {
    err: null,
    userDetails: null,
    userPosts: []
};

const postsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'CREATE_POST_SUCCESS':
            return {
                ...state,
                err: null,
                userDetails: null,
                userPosts: []
            };
        case 'CREATE_POST_ERROR':
            return {
                ...state,
                err: action.err.message,
                userDetails: null,
                userPosts: []
            };
        case 'UPDATE_POST_SUCCESS':
            return {
                ...state,
                err: null,
                userDetails: null,
                userPosts: []
            };
        case 'UPDATE_POST_ERROR':
            return {
                ...state,
                err: action.err.message,
                userDetails: null,
                userPosts: null
            }
        case 'DELETE_POST_SUCCESS':
            return {
                ...state,
                err: null,
                userDetails: null,
                userPosts: null
            }
        case 'DELETE_POST_ERROR':
            return {
                ...state,
                err: action.err.message,
                userDetails: null,
                userPosts: null
            }
        case 'USER_PROFILE_SUCCESS':
            return {
                ...state,
                userDetails: action.payload.userDetails,
                userPosts: action.payload.userPosts,
                err: null
            }
        case 'USER_PROFILE_ERROR':
            return {
                ...state,
                userDetails: null,
                userPosts: null,
                err: action.err.message
            }
        default:
            return {
                ...state,
                userDetails: null,
                userPosts: null,
                err: null
            };

    }
};

export default postsReducer;