import React from 'react';
import "./styles.scss";
import RightSideContainer from './RightSideContainer'
import LeftSideContainer from './LeftSideContainer'
import HeaderContainer from './HeaderContainer';

export function MainContainer () {
    return (
        <div className = 'main-container'>
            <header>
                <div className = 'top-cont'>
                    <HeaderContainer />
                </div>
            </header>
            <main className="detail-cont">
                <div className = 'left-cont'>
                    <LeftSideContainer/>
                </div>
                <div className = 'right-cont'>
                    <RightSideContainer/>
                </div>
            </main>
        </div>
    )
}