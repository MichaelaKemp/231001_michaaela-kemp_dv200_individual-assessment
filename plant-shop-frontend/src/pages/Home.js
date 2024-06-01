// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home is Where My Plants Are</h1>
            <p>Welcome to the Plant Shop!</p>
            <Link to="/plants" className="shopping-button">Go Shopping</Link>
        </div>
    );
};

export default Home;
