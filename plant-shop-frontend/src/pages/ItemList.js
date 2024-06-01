import React, { useEffect, useState } from 'react';
import { getPlants } from '../services/api';

const ItemList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            const data = await getPlants();
            setPlants(data);
        };
        fetchPlants();
    }, []);

    return (
        <div>
            <h1>Plant List</h1>
            <ul>
                {plants.map((plant) => (
                    <li key={plant._id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;