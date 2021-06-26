import React from 'react';
import "./styles.scss";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MailIcon from '@material-ui/icons/Mail';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EventIcon from '@material-ui/icons/Event';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AppsIcon from '@material-ui/icons/Apps';

export default function LeftSideContainer () {
    return (
        <div className = 'left-nav-cont'>
            <AppsIcon color="disabled"/>
            <FolderOpenIcon color = "primary" />
            <FavoriteIcon color = "disabled" />
            <LocalHospitalIcon color="disabled"/>
            <EventIcon color="disabled"/>
            <MonetizationOnIcon color="disabled" />
            <MailIcon color="disabled" />
            <ExitToAppIcon color="disabled"/>
        </div>
    )
}