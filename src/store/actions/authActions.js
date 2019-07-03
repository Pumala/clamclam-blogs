export const signInUser = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {

        console.log('USER CREDENTIALS...', credentials);
        // create instance of firebase
        const firebase = getFirebase();

        // sign user in
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            // dispatch an action depending if success/error c
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
        }).catch(err => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}

export const signOutUser = () => {
    return (dispatch, getState, { getFirebase }) => {
        console.log('HELP ME LOG OUT STATE::', getState());
        const firebase = getFirebase();

        // sign out user
        firebase.auth().signOut().then(() => {
            console.log('logout success YES!');
            dispatch({
                type: 'LOGOUT_SUCCESS'
            });
        }).catch(err => {
            console.log('logout ERROR NOOOOO!', err);
            dispatch({
                type: 'LOGOUT_ERROR'
            });
        })
    }
}