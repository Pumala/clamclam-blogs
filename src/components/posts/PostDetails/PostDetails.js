import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './PostDetails.scss';

class PostDetails extends Component {

    render() {

        const { authorId, title, content, firstName, lastName, createdAt = '', lastUpdatedAt = '' } = this.props.post;

        const { auth, postId } = this.props;

        if (!auth.uid) {
            return <Redirect to="/login"></Redirect>
        } else {
            return (
                <div className="post-details">

                    <div className="header-wrapper">
                        <h2>{title}</h2>
                        <p className="posted-by">Posted by
                            <span>
                                <Link to={`/profile/${authorId}`}>
                                    {firstName} {lastName}
                                </Link>
                            </span>
                        </p>
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
                        <p className="date"><span>Created:</span> {moment(createdAt.toDate()).calendar()}</p>
                    }
                    {
                        lastUpdatedAt &&
                        <p className="date"><span>Updated:</span> {moment(lastUpdatedAt.toDate()).calendar()}</p>
                    }
                </div>
            );
        }
    }

};

const mapStateToProps = (state, ownProps) => {

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