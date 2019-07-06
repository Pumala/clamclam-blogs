export const createPost = (post) => {
    /*
        using thunk middleware we halt the dispatch
        action creators return a function that has 
        access to the dispatch and state
    */
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('posts').add({
            ...post,
            firstName: profile.firstName,
            lastName: profile.lastName,
            authorId,
            createdAt: new Date(),
            lastUpdatedAt: null
        }).then(res => {
            // then proceed with dispatch
            dispatch({
                type: 'CREATE_POST_SUCCESS',
                post
            });
        }).catch(err => {
            dispatch({
                type: 'CREATE_POST_ERROR',
                err
            });
        });
    }
};

export const updateUserPost = (updatedPost) => {

    return (dispatch, getState, { getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection(
            'posts'
        ).doc(updatedPost.id).set({
            ...updatedPost,
            lastUpdatedAt: new Date()   
        }).then(res => {
            dispatch({
                type: 'UPDATE_POST_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'UPDATE_POST_ERROR'
            });
        });

    }
}

export const deleteUserPost = (deletedPost) => {
    return (dispatch, getState, { getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection(
            'posts'
        ).doc(deletedPost.id).delete()
        .then(res => {
            dispatch({
                type: 'DELETE_POST_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'DELETE_POST_ERROR'
            });
        });

    }
};

export const getUserProfileDetails = ( profileId ) => {
    return (dispatch, getState, { getFirestore }) => {

        // create instance of firebase
        const firestore = getFirestore();

        firestore.collection(
            'users'
        ).doc(profileId)
        .get()
        .then(res => {
            
            return firestore.collection('posts').get()
            .then(snapshot => {
                const userPosts = snapshot.docs.filter(doc => {
                    return doc.data().authorId === profileId
                }).map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                });
                dispatch({
                    type: 'USER_PROFILE_SUCCESS',
                    payload: {
                        userPosts,
                        userDetails: res.data()
                    }
                })
            })

        }).catch(err => {
            dispatch({
                type: 'USER_PROFILE_ERROR',
                err
            })
        })
    }
}