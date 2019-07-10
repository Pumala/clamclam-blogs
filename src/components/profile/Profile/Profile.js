import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfileDetails } from '../../../store/actions/postActions';
import PostList from '../../posts/PostList/PostList';
import './Profile.scss';
class Profile extends Component {

    componentDidMount() {

        this.props.getUserProfileDetails(this.props.authorId);
    }

    render() {

        const { userPosts : posts, userDetails } = this.props.posts;

        if (posts && userDetails) {
            return (
                <div className="profile">
                    <PostList 
                        className="post-list"
                        posts={posts} 
                        title={ `${userDetails.firstName} ${userDetails.lastName}'s Posts`  }
                    />
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
        authorId: ownProps.match.params.id
    }
}


const mapDispatchToProps = dispatch => {

    return {
        getUserProfileDetails : (profileId) => dispatch(getUserProfileDetails(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);