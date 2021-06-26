import React from 'react';
import "./styles.scss";
import Dots from 'material-ui-dots'
// import IconLabelButtons from "./IconLabelButtons"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      height: "12px"
    },
  }));

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
        
    }
];

export default function AppoinmentListContainer () {
    const classes = useStyles();

    return (
        <div className = 'appoint-lists'>
               <div className="appoint-top">
                    <p>Appointments</p>
                    {/* <Dots count = {3} index ={0} onDotClick = {() => {}}/> */}
               </div>
               <div className="appoint-mid">
                   <div className="appoint-button">
                    <div className="button-ui">
                        <Button
                            variant="contained"
                            color= "primary"
                            // className={classes.button}
                        >
                            Upcoming
                        </Button>
                    </div>
                    <div className="button-ui">
                        <Button className = "past-text"
                            variant="contained"
                            color= "disabled"
                            className={classes.button}
                        >
                            Past
                        </Button>
                    </div>
                   </div>
                   <div className="nav-ui">
                        <ul>
                            <li><ChevronLeftTwoToneIcon color="disabled"/></li>
                            <li><ChevronRightTwoToneIcon color="primary"/></li>

                        </ul>
                    </div>
                    <div className="sort-ui">
                            <p>Sort By</p>
                            <div className="display-icon-detail">
                                <p>Date</p>
                                <ExpandMoreTwoToneIcon color="primary" fontSize="small"/>
                            </div>
                    </div>
               </div>
               <div className="appoint-card">
                  { doctors.map(doctor => <Card doctor={doctor} />) }
               </div>
        </div>
    )
}