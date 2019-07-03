import React from 'react';
import PostItem from '../PostItem/PostItem';
import './PostList.scss';

const PostList = ({ posts }) => {

    const list = posts ? (
        posts.map((post, id) =>
            (
                <PostItem key={id} className="post"
                    post={post}
                />
            )
        )
    ) : null;

    if (posts && posts.length > 0) {
        return (
            <div className="post-list">
                {
                    list
                }
            </div>
        );
    } else {
        return (
            <div>
                No results
            </div>
        )
    }
}

export default PostList;
