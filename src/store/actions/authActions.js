export const signInUser = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {

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

        const firebase = getFirebase();

        // sign out user
        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'LOGOUT_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'LOGOUT_ERROR'
            });
        })
    }
}

export const signUpUser = (newUserInfo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        // sign up new user
        firebase.auth().createUserWithEmailAndPassword(
            newUserInfo.email,
            newUserInfo.password
        ).then((res) => {

            // create a new user in the users collection in firestore
            // we want to use the same id that firebase created for the user
            return firestore.collection(
                'users'
            ).doc(res.user.uid).set({
                firstName: newUserInfo.firstName,
                lastName: newUserInfo.lastName,
                initials: (newUserInfo.firstName[0] + newUserInfo.firstName[0]).toUpperCase()
            })

        }).then(() => {
            dispatch({
                type: 'SIGN_UP_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'SIGN_UP_ERROR',
                err
            });
        })

    }
}