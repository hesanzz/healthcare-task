import React from 'react';
import "./styles.scss";
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

const useStyles = makeStyles((theme) => ({
    button: {
            background: "linear-gradient(45deg, #00ff00 30%, #006400 90%)",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            height: 48,
            padding: "0 30px"
    },
  }));

export default function HeaderContainer () {
    const classes = useStyles();
    return (
        <div className="header-cont">
            <div className="appoinment-button">
            <div className="button-ui">
                        <Button
                            variant="contained"
                            // color= "primary"
                            className={classes.button}
                            endIcon = {<ChevronRightTwoToneIcon/>}
                        >
                            Make an appointment
                        </Button>
                    </div>
            </div>
            <div className="profile-details">
            <div className="display-profile-icons">
                    <PersonIcon color="disabled" fontSize="small" />
                    <NotificationsIcon color="disabled" fontSize="small" />
                    <AccountCircleIcon color="primary" fontSize="large"/>
                    <p>katty Zaytseva</p>
                    <ExpandMoreTwoToneIcon color="primary" fontSize="small"/>
                    </div>
            </div>
        </div>
    )
}