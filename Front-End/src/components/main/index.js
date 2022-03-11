import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './main.css';

const Main = () => {

    const [page, setPage] = useState('home');

    const navigate = useNavigate();

    const handleHome = () => {
        setPage('home');
    }

    const handleAskQuestion = () => {
        setPage('ask-question');
    }

    const handleSignOff = () => {
        localStorage.clear();
        navigate('/', { replace: true });
      };

    return (
        <div className="mainComponent">
            <div className="container-title">
                <h1 className="title">TELL US</h1>
                <hr />
            </div>
            <Link to="/home" className="link" onClick={handleHome}>
                <div className={page === 'home' ? 'active': 'item'}>
                    Home
                </div>
            </Link>
            <Link to="/ask-question" className="link" onClick={handleAskQuestion}>
                <div className={page === 'ask-question' ? 'active': 'item'}>
                    Ask Question
                </div>
            </Link>

            <div className='item logout' onClick={handleSignOff}>
                Log out
            </div>
        </div>
    );
}

export default Main;