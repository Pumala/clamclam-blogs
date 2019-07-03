export const createPost = (post) => {
    console.log('dispatching away 1:', post);
    /*
        using thunk middleware we halt the dispatch
        action creators return a function that has 
        access to the dispatch and state
    */
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        console.log('dispatching away 2:', getState());

        const firestore = getFirestore();

        firestore.collection('posts').add({
            ...post,
            firstName: 'carolyn',
            lastName: 'lam',
            authorId: '123',
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