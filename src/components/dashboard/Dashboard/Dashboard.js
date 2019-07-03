import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import PostList from '../PostList/PostList';
import './Dashboard.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
    render() {

        const { posts } = this.props;

        return (
            <div className="dashboard">
                <PostList posts={posts} />
                <Notifications />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('STATE in dash:::', state.firestoreReducer);
    if (state.firestoreReducer.ordered && state.firestoreReducer.ordered.posts) {
        return {
            posts: state.firestoreReducer.ordered.posts
        }
    } else {
        return {
            posts: state.postsReducer.posts
        }
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