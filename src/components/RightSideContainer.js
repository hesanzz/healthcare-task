import React from 'react';
import DataContainer from './DataContainer';
import UpdatesContainer from './UpdatesContainer';
import "./styles.scss";

export default function RightSideContainer () {
    return (
        <section className="right-side-cont">
            <div className = 'left-details'>
                <UpdatesContainer/>
            </div>
            <div className = 'right-details'>
                <DataContainer/>
            </div>
        </section>
    )
}