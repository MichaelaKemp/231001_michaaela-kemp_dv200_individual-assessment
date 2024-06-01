// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PlantList from './pages/PlantList';
import PlantDetail from './pages/PlantDetail';
import Cart from './pages/Cart';
import { CartProvider } from './CartContext';
import './App.css';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/plants" element={<PlantList />} />
                    <Route path="/plants/:id" element={<PlantDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
