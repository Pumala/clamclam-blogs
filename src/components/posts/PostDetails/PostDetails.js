import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import './PostDetails.scss'

const PostDetails = (props) => {

    console.log('PROPS IN POST DETAILS:', props);

    const { title, content, firstName, lastName, createdAt = '' } = props.post; 

    const { auth } = props;

    if (!auth.uid) {
        return <Redirect to="/login"></Redirect>
    } else {
        return (
            <div className="post-details">
                <h2>{ title }</h2>
                <p className="posted-by">Posted by { firstName } { lastName }</p>
                <p className="content">{content}</p>
                {
                    createdAt &&
                    <p>Created: { moment(createdAt.toDate()).calendar() }</p>
                }
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