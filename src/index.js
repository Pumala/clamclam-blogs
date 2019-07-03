import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../src/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';
/*
apply thunk as our middleware; it enhances our store functionality
thunk does this by returning a function inside our action creators 
that can interact with the database
*/

const store = createStore(
    rootReducer, 
    // compose with store enhancers
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
        // attachAuthIsReady : set to true so that we can then check when auth is complete
        // useFirestoreForProfile : set to true so that we can sync the user document onto the firebase profile property
        reactReduxFirebase(firebaseConfig, { attachAuthIsReady : true, useFirestoreForProfile: true, userProfile: 'users' }),
        reduxFirestore(firebaseConfig)
    )
);

// when firebase is ready, then render the DOM
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
});
