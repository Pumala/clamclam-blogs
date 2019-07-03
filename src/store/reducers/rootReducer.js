import authReducer from './authReducer';
import postsReducer from './postsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    authReducer,
    postsReducer,
    // adding premade firestore reducer will sync the firestore data with the store state
    firestoreReducer,
    firebaseReducer
});


export default rootReducer;