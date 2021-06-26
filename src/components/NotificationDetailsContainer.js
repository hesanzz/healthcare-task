import React from 'react';
import "./styles.scss";

export default function NotificationDetailsContainer () {
    return (
        <div className = "notification-cont">
            <div className = 'notify-details'>
                <h4>Notification</h4>
                <p>You have 3 Notifications</p>
            </div>
            <div className = 'calceled-details'>
                <h4>Canceled Visits</h4>
                <p>You have 1 canceled visit</p>
            </div>
        </div>
        
        
            
    )
}