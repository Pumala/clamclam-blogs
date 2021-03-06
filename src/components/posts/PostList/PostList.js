import React from 'react';
import PostItem from '../PostItem/PostItem';
import './PostList.scss';

const PostList = ({ posts, title }) => {

    const list = posts ? (
        posts.map((post, id) =>
            (
                <PostItem key={id} className="post"
                    post={post}
                />
            )
        )
    ) : null;

    return (
        <div className="post-list">
            <div className="wrapper">
                <h2>{title}</h2>
                {
                    posts && posts.length > 0 && list
                }
                {
                    !posts && <p>No results</p>
                }
            </div>
        </div>
    );



    // if (posts && posts.length > 0) {
    //     return (
    //         <div className="post-list">
    //             <h2>{title}</h2>
    //             {
    //                 list
    //             }
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="post-list">
    //             <h2>{title}</h2>
    //             <p>No results</p>
    //         </div>
    //     )
    // }
}

export default PostList;
