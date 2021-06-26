import React from 'react';
import "./styles.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ScheduleTwoToneIcon from '@material-ui/icons/ScheduleTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      height: "12px"
    },
  }));

function Card (props) {
    console.log(props);
    const selectedDoctor =props.doctor;
    const classes = useStyles();

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
            <div className="card-button">
                <div className="button-ui">
                        <Button
                            variant="contained"
                            color= "primary"
                            className={classes.button}
                            startIcon = {<DoneIcon/>}
                        >
                            confirm
                        </Button>
                    </div>
                    <div className="button-ui">
                        <Button className = "past-text"
                            variant="contained"
                            color= "secondary"
                            className={classes.button}
                            startIcon= {<CloseIcon/>}
                        >
                            Cancel
                        </Button>
                    </div>

                </div>
            
        </div>
    )
    
}
export default Card;