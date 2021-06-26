import React from 'react';
import "./styles.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleTwoToneIcon from '@material-ui/icons/ScheduleTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';

function Card (props) {
    console.log(props);
    const selectedDoctor =props.doctor;
    return (
        <div className="card-cont">
            <div className="doc-cont"> 
               {selectedDoctor.profile ? <img src={selectedDoctor.profile} /> : <AccountCircleIcon fontSize="large"/> } 
                <div className="design-cont"> 
                    <p>{selectedDoctor.name}</p>
                    <p>{selectedDoctor.designation}</p>
                </div>
            </div>
            <div className="card-address">
                <div className="card-hsp-add">
                    <div className="display-icon-detail">
                    <LocationOnRoundedIcon color="primary" fontSize="small"/>
                    <p>{selectedDoctor.address1}</p>
                    </div>
                  <p>{selectedDoctor.address2}</p>  
                </div>
                <div className="card-time">
                <div className="display-icon-detail">
                    <DateRangeTwoToneIcon color="disabled" fontSize="small"/>
                    <p>{selectedDoctor.date}</p>
                </div>
                <div className="display-icon-detail">
                    <ScheduleTwoToneIcon color="disabled" fontSize="small"/>
                    <p>{selectedDoctor.time}</p>
                </div>
                </div>
            </div>
            
        </div>
    )
    
}
export default Card;