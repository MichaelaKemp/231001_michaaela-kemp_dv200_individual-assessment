import React, { useState } from 'react';
import { createPlant } from '../services/api';

const CreateItem = () => {
    const [plant, setPlant] = useState({
        name: '',
        watering: '',
        height: '',
        temperature: '',
        description: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlant((prevPlant) => ({
            ...prevPlant,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPlant(plant);
        // Add navigation or reset form logic here
    };

    return (
        <div>
            <h1>Create Plant</h1>
            <form onSubmit={handleSubmit}>
                {/* Add form fields here */}
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateItem;