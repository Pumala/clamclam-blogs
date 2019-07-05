import React from 'react';
import moment from 'moment';
import './NotificationItem.scss';

const NotificationItem = ({ notification }) => {

    const { action, author, time } = notification;

    return (
        <div className="notification">
            <h3>{ author }</h3>
            <p className="action">{ action }</p>
            <p>{ moment(time.toDate()).fromNow() }</p>
        </div>
    );
};

export default NotificationItem;