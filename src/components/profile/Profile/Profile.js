import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getUserPosts } from '../../../store/actions/postActions';
import PostList from '../../dashboard/PostList/PostList';
import './Profile.scss';
class Profile extends Component {

    componentDidMount() {
        this.props.getUserPosts();
    }

    render() {

        console.log('state in PROFILE:', this.props.posts);
        const { userPosts : posts } = this.props.posts;

        return (
            <div className="profile">
                <h2>Profile</h2>
                <PostList posts={posts} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        posts: state.posts
    }
}


const mapDispatchToProps = dispatch => {

    return {
        getUserPosts : () => dispatch(getUserPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
