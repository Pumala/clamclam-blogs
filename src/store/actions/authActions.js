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