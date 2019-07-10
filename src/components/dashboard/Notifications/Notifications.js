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
            <div className="wrapper">
                <h2>Recent Activity</h2>
            {
                notificationList
            }
            </div>
        </div>
    );
}

export default Notifications;
