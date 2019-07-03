import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const PostDetails = (props) => {

    const { title, content, firstName, lastName, createdAt } = props.post; 

    return (
        <div>
            <h2>{ title }</h2>
            <p>{content}</p>
            <h4>Posted by { firstName } { lastName }</h4>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log('CURR STATE:', state);
    console.log('OWD PROPS:', ownProps);
    const postId = ownProps.match.params.id;
    const posts = state.firestoreReducer.data.posts;
    const post = posts ? posts[postId] : '';
    // console.log('ANYTHING IN HERE?', post);
    return {
        post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(PostDetails)


    // connect(mapStateToProps)(PostDetails)

// export default 


//     connect(mapStateToProps)(PostDetails)