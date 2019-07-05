import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getUserPosts } from '../../../store/actions/postActions';

class Profile extends Component {

    componentDidMount() {
        this.props.getUserPosts();
    }

    render() {

        console.log('state in PROFILE:', this.props.posts);

        return (
            <div>
                <h1>Profile</h1>
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
