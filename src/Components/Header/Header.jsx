import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

import Cael from '../Assets/Cael.png';

const Header = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/home');
    }

    const navigateToDo = () => {
        navigate('/todo');
    }

    const navigateMusic = () => {
        navigate('/music');
    }

    const navigateHobbies = () => {
        navigate('/hobbies');
    }

    return (
        <div className='header'>
            <button1 onClick={navigateHome} className="left-stuff" >
                <img src={Cael} alt="logo"/>
            </button1>

            <div className="right-stuff">
                <button onClick={navigateHome} className="home">
                        <span><div className='button'>
                            HOME
                        </div></span>
                </button>

                <button onClick={navigateToDo} className="todo">
                        <span><div className='button'>
                            TO-DO LIST
                        </div></span>
                </button>

                <button onClick={navigateMusic} className="music">
                        <span><div className='button'>
                            MUSIC
                        </div></span>
                </button>

                <button onClick={navigateHobbies} className="hobbies">
                        <span><div className='button'>
                            HOBBIES
                        </div></span>
                </button>
            </div>
        </div>
    );
}

export default Header;
