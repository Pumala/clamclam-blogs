import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { EditPost } from '../EditPost/EditPost';
import './PostDetails.scss';

// TODO: change to class component
// with a boolean isEditMode
// import EditPost


class PostDetails extends Component {

    render() {

        this.state = {
            editPost: false
        }

        console.log('PROPS IN POST DETAILS:', this.props);

        const { authorId, title, content, firstName, lastName, createdAt = '', lastUpdatedAt = '' } = this.props.post;

        const { auth, postId } = this.props;

        if (!auth.uid) {
            return <Redirect to="/login"></Redirect>
        } else {
            return (
                <div className="post-details">

                    <div className="header-wrapper">
                        <h2>{title}</h2>
                        <p className="posted-by">Posted by {firstName} {lastName}</p>
                    </div>
                    {
                        auth.uid === authorId &&


                        <Link className="edit-btn" to={{
                            pathname: `/post/${postId}/edit`,
                            state: this.props.post
                        }}>Edit</Link>
                    }
                    <p className="content">{content}</p>
                    {
                        createdAt &&
                        <p>Created: {moment(createdAt.toDate()).calendar()}</p>
                    }
                    {
                        lastUpdatedAt &&
                        <p>Last Updated: {moment(lastUpdatedAt.toDate()).calendar()}</p>
                    }
                </div>
            );
        }
    }

};

const mapStateToProps = (state, ownProps) => {

    console.log('state in post details: ', state);

    const postId = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[postId] : '';
    return {
        post,
        postId,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(PostDetails)