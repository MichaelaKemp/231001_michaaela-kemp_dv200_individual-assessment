import React, { useEffect, useState } from 'react';
import { getPlantById, updatePlant } from '../services/api';
import { useParams } from 'react-router-dom';

const EditItem = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState({
        name: '',
        watering: '',
        height: '',
        temperature: '',
        description: '',
        price: '',
        image: ''
    });

    useEffect(() => {
        const fetchPlant = async () => {
            const data = await getPlantById(id);
            setPlant(data);
        };
        fetchPlant();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlant((prevPlant) => ({
            ...prevPlant,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePlant(id, plant);
        // Add navigation or reset form logic here
    };

    return (
        <div>
            <h1>Edit Plant</h1>
            <form onSubmit={handleSubmit}>
                {/* Add form fields here */}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditItem;