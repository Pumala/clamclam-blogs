import React from 'react';
import PostItem from '../PostItem/PostItem';
import './PostList.scss';

const PostList = ({ posts, title }) => {

    console.log('PROPS IN POST list ..... :', posts);

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
                <h2>{title}</h2>
                {
                    list
                }
            </div>
        );
    } else {
        return (
            <div>
                <p>No results</p>
            </div>
        )
    }
}

export default PostList;
