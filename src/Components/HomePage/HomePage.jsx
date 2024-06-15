import React from 'react';
import './HomePage.css';

import { useNavigate } from "react-router-dom";

import Photo from '../Assets/Photo.png';

const Home = () => {
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
        <div className='homepage'>
            <div className="hp-left">
                <h1>🖥️ MACHINE PROBLEM ~</h1>
                <p>Hi! I am Michael David N Agudo</p>
                <p>A 3rd year Computer Science Student</p>
                <p>from the University of the Philippines Manila!</p>

                <div className="goto">
                    <p1>GO TO:</p1>
                    <div className="hp-left-row">
                        <button onClick={navigateHome} className="goto-home">
                                <span><div className='button'>
                                    HOME
                                </div></span>
                        </button>

                        <button onClick={navigateToDo} className="goto-todo">
                                <span><div className='button'>
                                    TO-DO LIST
                                </div></span>
                        </button>

                        <button onClick={navigateMusic} className="goto-music">
                                <span><div className='button'>
                                    MUSIC
                                </div></span>
                        </button>

                        <button onClick={navigateHobbies} className="goto-hobbies">
                                <span><div className='button'>
                                    HOBBIES
                                </div></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hp-right">
                <img src={Photo} alt="photo"/>
            </div>
        </div>
    );
}

export default Home;
