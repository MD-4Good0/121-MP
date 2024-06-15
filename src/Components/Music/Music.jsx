import React from 'react';
import './Music.css';

import Good from '../Assets/Good.jpg';
import FOML from '../Assets/FOML.jpg';
import Magnetic from '../Assets/Magnetic.jpg';
import Pahinga from '../Assets/Pahinga.jpg';
import Let_Go from '../Assets/Let_Go.png';

const Music = () => {
    return (
        <div className='Music'>
            <h1 className='music-title'>
            🎶 Top 5 - Music ~
            </h1>
            <div className="music-section">
                <div className="right-music-1">
                    <div className="music-column">
                        <p2 className="m-c-right">~ Good, Pt.2</p2>
                        <p className="m-c-right">Red Tips, Kenny Rivers, Caleb Gordon</p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=VLk46mcxEQw">
                            <img src={Good}/>
                    </a>
                    <div className="m-s-count">1</div>
                </div>

                <div className="left-music-1">
                    <div className="m-s-count">2</div>
                    <a href="https://www.youtube.com/watch?v=xWC808UHCr4">
                            <img src={FOML}/>
                    </a>
                    <div className="music-column">
                        <p2 className="m-c-left">Fruits of My Labor ~</p2>
                        <p className="m-c-left">Caleb Gordon</p>
                    </div>
                </div>

                <div className="right-music-1">
                    <div className="music-column">
                        <p2 className="m-c-right">~ Magnetic</p2>
                        <p className="m-c-right">ILLIT</p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=Vk5-c_v4gMU">
                            <img src={Magnetic}/>
                    </a>
                    <div className="m-s-count">3</div>
                </div>

                <div className="left-music-1">
                    <div className="m-s-count">4</div>
                        <a href="https://www.youtube.com/watch?v=kwhrRQtq66g">
                            <img src={Pahinga}/>
                        </a>
                    <div className="music-column">
                        <p2 className="m-c-left">Pahinga ~</p2>
                        <p className="m-c-left">Joaquin Pacete</p>
                    </div>
                </div>

                <div className="right-music-1">
                    <div className="music-column">
                        <p2 className="m-c-right">~ Let Go</p2>
                        <p className="m-c-right">Connor Price, Nic D</p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=YIQzApOf5K0">
                            <img src={Let_Go}/>
                    </a>
                    <div className="m-s-count">5</div>
                </div>
            </div>
        </div>
    );
}

export default Music;
