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
            <h2>Notifications</h2>
            {
                notificationList
            }
        </div>
    );
}

export default Notifications;
