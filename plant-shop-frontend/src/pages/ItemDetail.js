import React, { useEffect, useState } from 'react';
import { getPlantById } from '../services/api';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        const fetchPlant = async () => {
            const data = await getPlantById(id);
            setPlant(data);
        };
        fetchPlant();
    }, [id]);

    if (!plant) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{plant.name}</h1>
            <p>{plant.description}</p>
            {/* Add more plant details here */}
        </div>
    );
};

export default ItemDetail;