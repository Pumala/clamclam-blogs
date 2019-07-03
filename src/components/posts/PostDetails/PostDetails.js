import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const PostDetails = (props) => {

    const { title, content, firstName, lastName, createdAt } = props.post; 

    const { auth } = props;

    if (!auth.uid) {
        return <Redirect to="/login"></Redirect>
    } else {
        return (
            <div>
                <h2>{ title }</h2>
                <p>{content}</p>
                <h4>Posted by { firstName } { lastName }</h4>
                <p>Ceated: { moment(createdAt.toDate()).calendar() }</p>
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[postId] : '';
    return {
        post,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(PostDetails)