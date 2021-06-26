import React from 'react';
import "./styles.scss";
import RightSideContainer from './RightSideContainer'

export function MainContainer () {
    return (
        <div className = 'main-container'>
            <header>
                <div className = 'top-cont'>
                    top
                </div>
            </header>
            <main className="detail-cont">
                <div className = 'left-cont'>
                    left
                </div>
                <div className = 'right-cont'>
                    <RightSideContainer/>
                </div>
            </main>
        </div>
    )
}