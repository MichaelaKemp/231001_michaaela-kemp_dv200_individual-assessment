// src/pages/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((plant, index) => (
                        <li key={index}>
                            <img src={plant.img} alt={plant.name} />
                            <span>{plant.name}</span>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/plants" className="back-to-shopping-button">Back to Shopping</Link>
        </div>
    );
};

export default Cart;
