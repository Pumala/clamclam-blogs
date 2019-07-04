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

        const { posts, auth, notifications } = this.props;

        if (!auth.uid) {
            return <Redirect to="/login"></Redirect>
        } else {
            return (
                <div className="dashboard">
                    <PostList posts={posts} />
                    <Notifications 
                        notifications={notifications}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'posts',
            orderBy: [
                'createdAt',
                'desc'
            ]
        },
        {
            collection: 'notifications',
            limit: 3,
            orderBy: [
                'time',
                'desc'
            ]
        }
    ])
)(Dashboard);