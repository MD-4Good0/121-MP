import React from 'react';
import './Hobbies.css';

import Guitar from '../Assets/Guitar.png';
import Drawing from '../Assets/Drawing.png';
import WD from '../Assets/WD.png';
import Workout from '../Assets/Workout.png';
import Sleep from '../Assets/Sleep.png';

const Hobbies = () => {
    return (
        <div className='Hobbies'>
            <h1 className='hobbies-title'>
                🎨 Hobbies ~
            </h1>
            <div className="hobbies-section">
                <div className="h-s-column">
                    <img src={Guitar}/>
                    <p3>Guitar Playing</p3>
                    <p4>That and Songwriting</p4>
                </div>
                <div className="h-s-column">
                    <img src={Drawing}/>
                    <p3>Drawing</p3>
                    <p4>Not the best, but trying at least</p4>
                </div>
                <div className="h-s-column">
                    <img src={WD}/>
                    <p3>Web Development</p3>
                    <p4>w EB DevloPMent is My pasSiOn</p4>
                </div>
                <div className="h-s-column">
                    <img src={Workout}/>
                    <p3>Working Out</p3>
                    <p4>Anything except legs, really</p4>
                </div>
                <div className="h-s-column">
                    <img src={Sleep}/> 
                    <p3>Sleeping</p3>
                    <p4>Who doesn't love to sleep?</p4>
                </div>
            </div>
            <h2>~ Jack of All Trades, Master of None ~</h2>
            <h1 className="favorites">
                🙋‍♀️ Favorite - Her ~
            </h1>
            <div className="favorites-section">
                🔒 Unlock premium ;)
            </div>
            <h2>~ Mine, All Mine ~</h2>
        </div>
    );
}

export default Hobbies;
