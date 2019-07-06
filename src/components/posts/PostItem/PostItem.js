import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.scss';
import moment from 'moment';

const PostItem = ({ post }) => {

    const { id, authorId, title, firstName, lastName, createdAt, lastUpdatedAt } = post;

    // console.log('post in post item:', post);

    return (
        <div className="post">
            <h3><Link to={`/post/${id}`}>{title}</Link></h3>
            <h4>Posted by
                <span>
                    <Link className="edit-btn" to={`/profile/${authorId}`}> {firstName} {lastName}</Link>
                </span>
            </h4>
            {
                lastUpdatedAt ? <p><span>Updated:</span> {moment(lastUpdatedAt.toDate()).calendar()}</p> :
                    <p><span>Created:</span> {moment(createdAt.toDate()).calendar()}</p>
            }
        </div>
    );
};

export default PostItem;


