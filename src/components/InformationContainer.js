import React from 'react';
import "./styles.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleTwoToneIcon from '@material-ui/icons/ScheduleTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';

var doctors = [
    {
      location: "Location 1",
      name: "Dr Arnab",
      designation: "psychologist",
      date: "16/01/2021",
      time: "1:28 PM",
      address1: "Main Medical Centre",
      address2: "18 Votelya Pr, Paris"
      //profile: <AccountCircleIcon fontSize="large"/>
      
    },
    {
        location: "Location 2",
        name: "Dr Aliza",
        designation: "dentist",
        date: "16/02/2021",
        time: "2:28 PM",
        address1: "Main Medical Centre",
        address2: "18 Votelya Pr, Paris"
        //profile: <AccountCircleIcon fontSize="large"/>
        
    },
    {
        location: "Location 3",
        name: "Dr Edward",
        designation: "psychologist",
        date: "16/03/2021",
        time: "3:28 PM",
        address1: "Main Medical Centre",
        address2: "18 Votelya Pr, Paris"
        //profile: <AccountCircleIcon fontSize="large"/>
        
    },
    {
        location: "Location 4",
        name: "Dr Ann",
        designation: "pediatrician",
        date: "16/04/2021",
        time: "4:28 PM",
        address1: "Main Medical Centre",
        address2: "18 Votelya Pr, Paris"
        //profile: <AccountCircleIcon fontSize="large"/>
        
    },
    {
        location: "Location 5",
        name: "Dr Alexa",
        designation: "pediatrician",
        date: "16/05/2021",
        time: "5:28 PM", address1: "Main Medical Centre",
        address2: "18 Votelya Pr, Paris"
        // profile: <AccountCircleIcon fontSize="large"/>
        
    },
    {
        location: "Location 6",
        name: "Dr Maximus",
        designation: "dentist",
        date: "16/06/2021",
        time: "6:28 PM", 
        address1: "Main Medical Centre",
        address2: "18 Votelya Pr, Paris"
        //profile: <AccountCircleIcon fontSize="large"/>
        
    },
    {
        location: "Location 7",
        name: "Dr Verna",
        designation: "psychologist",
        date: "16/07/2021",
        time: "7:28 PM", 
        address1: "Main Medical Centre",
        address2: "18 Votelya Pr, Paris"
        //profile: <AccountCircleIcon fontSize="large"/>
        
    }
];


function InformationContainer (props) {
    console.log(props);
    const selectedDoctor = doctors.find(item => item.location === props.details.name)
    return (
        <div className="info-cont">
            <div className="doc-cont"> 
               {selectedDoctor.profile ? <img src={selectedDoctor.profile} /> : <AccountCircleIcon fontSize="large"/> } 
                <div className="design-cont"> 
                    <p>{selectedDoctor.name}</p>
                    <p>{selectedDoctor.designation}</p>
                </div>
            </div>
            <div className="address-cont">
                <div className="hsp-add">
                    <div className="display-icon-detail">
                    <LocationOnRoundedIcon color="primary" fontSize="small"/>
                    <p>{selectedDoctor.address1}</p>
                    </div>
                  <p>{selectedDoctor.address2}</p>  
                </div>
                <div className="time-cont">
                <div className="display-icon-detail">
                    <DateRangeTwoToneIcon color="primary" fontSize="small"/>
                    <p>{selectedDoctor.date}</p>
                </div>
                <div className="display-icon-detail">
                    <ScheduleTwoToneIcon color="primary" fontSize="small"/>
                    <p>{selectedDoctor.time}</p>
                </div>
                </div>

            </div>
        </div>
    )
    
}
export default InformationContainer;