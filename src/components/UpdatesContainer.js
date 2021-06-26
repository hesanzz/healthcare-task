import React from 'react';
import "./styles.scss";
import NotificationDetailsContainer from './NotificationDetailsContainer';
// import Calender from './Calender'

export default function UpdatesContainer () {
    return (
        <div className = 'update-cont'>
           <div className = "calender">
                {/* <Calender/> */}
           </div>
           <div className="notify-cont">
                <NotificationDetailsContainer/>
           </div>
        </div>
    )
}