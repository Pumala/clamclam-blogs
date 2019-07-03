export const createPost = (post) => {
    console.log('dispatching away 1:', post);
    /*
        using thunk middleware we halt the dispatch
        action creators return a function that has 
        access to the dispatch and state
    */
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        console.log('CREATE PLEASE:', getState());

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
                type: 'CREATE_POST',
                post
            });
        }).catch(err => {
            console.log('error alert..', err);
        });
    }
}