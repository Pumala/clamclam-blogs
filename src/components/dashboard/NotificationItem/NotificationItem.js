import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './NotificationItem.scss';

const NotificationItem = ({ notification }) => {

    const { action, author, time, authorId } = notification;

    return (
        <div className="notification">
            <h3><Link to={`/profile/${authorId}`}>{ author }</Link></h3>
            <p className="action">{ action }</p>
            <p>{ moment(time.toDate()).fromNow() }</p>
        </div>
    );
};

export default NotificationItem;