import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.scss';
import moment from 'moment';

const PostItem = ( { post } ) => {

    const { id, title, firstName, lastName, createdAt } = post;

    return (
        <div className="post">
            <Link to={`/post/${id}`}>{title}</Link>
            <h4>Posted by {firstName} {lastName}</h4>
            <p>{ moment(createdAt.toDate()).calendar() }</p>
        </div>
    );
};

export default PostItem;


