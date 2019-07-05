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
            createdAt: new Date()
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

export const getUserPosts = () => {
    return (dispatch, getState, { getFirestore }) => {

        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        
        firestore.collection('posts').get()
            .then((snapshot) => {
                const userPosts = snapshot.docs.filter(doc => {
                    return doc.data().authorId === authorId
                }).map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                });

                dispatch({
                    type: 'GET_USER_POSTS',
                    userPosts
                });
            })
            .catch(err => {
                console.log('err retrieving posts..', err)
            });

    }
}