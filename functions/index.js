// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from the ZombieWorld!");
// });

// create a new notification
const createNotification = notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(() => {
            console.log('SUCCESS CREATING NOTIFICATION: ', notification);
        })
        .catch(err => {
            console.log('ERROR CREATING NOTIFICATION: OBJ:', notification);
            console.log('ERROR CREATING NOTIFICATION: MESSAGE:', err);
        });
};

// listen for when a post has been created
exports.postCreatedNotification = functions.firestore.document('posts/{postId}').onCreate(doc => {

    // get the newly created post data
    let post = doc.data();

    // set up new notification object
    const notification = {
        action: 'added a new post',
        author: `${post.firstName} ${post.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
        authorId: post.authorId
    }

    return createNotification(notification);

});

// listen for when a user has been created
exports.userCreatedNotification = functions.firestore.document('users/{userId}').onCreate(doc => {

    let user = doc.data();

    const notification = {
        action: 'joined',
        author: `${user.firstName} ${user.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
        authorId: doc.id
    }

    return createNotification(notification);

})

// listen for when a post has been deleted
exports.postDeletedNotification = functions.firestore.document('posts/{postId}').onDelete(doc => {

    // get the newly created post data
    let post = doc.data();

    // set up new notification object
    const notification = {
        action: 'deleted a post',
        author: `${post.firstName} ${post.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
        authorId: post.authorId
    }

    return createNotification(notification);

});

// listen for when a post has been updated
exports.postUpdatedNotification = functions.firestore.document('posts/{postId}').onUpdate((snapshot, context) => {

    // get the newly created post data
    let post = snapshot.after.data();

    // set up new notification object
    const notification = {
        action: 'updated a post',
        author: `${post.firstName} ${post.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
        authorId: post.authorId
    }

    return createNotification(notification);

});