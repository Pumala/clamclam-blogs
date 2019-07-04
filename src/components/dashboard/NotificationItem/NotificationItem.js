import React from 'react';
import moment from 'moment';

const NotificationItem = ({ notification }) => {

    const { action, author, time } = notification;

    return (
        <div>
            <h3>{ author } { action }</h3>
            <p>{ moment(time.toDate()).fromNow() }</p>
        </div>
    );
};

export default NotificationItem;