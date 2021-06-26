import React from 'react';
import "./styles.scss";
import LocationContainer from './LocationContainer';
import AppoinmentListContainer from './AppoinmentListContainer';

export default function DataContainer () {
    return (
        <section className="data-cont">
            <div className = 'location-cont'>
                <LocationContainer/>
            </div>
            <div className = 'appoin-cont'>
                <AppoinmentListContainer/>
            </div>
        </section>
    )
}