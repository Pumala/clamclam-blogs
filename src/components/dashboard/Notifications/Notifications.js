import React from 'react';
import './Notifications.scss';
import NotificationItem from '../NotificationItem/NotificationItem';

const Notifications = ({ notifications }) => {
    
    const notificationList = notifications ? (
        notifications.map(notification => (
            <NotificationItem
                key={notification.id}
                notification={notification}
            />
        ))
    ) : null;

    return (
        <div className="notifications">
            <p>Notifications</p>
            {
                notificationList
            }
        </div>
    );
}

export default Notifications;
