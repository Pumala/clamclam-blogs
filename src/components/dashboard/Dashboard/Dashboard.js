import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import PostList from '../PostList/PostList';
import './Dashboard.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {

        const { posts, auth } = this.props;

        if (!auth.uid) {
            return <Redirect to="/login"></Redirect>
        } else {
            return (
                <div className="dashboard">
                    <PostList posts={posts} />
                    <Notifications />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'posts'
        }
    ])
)(Dashboard);