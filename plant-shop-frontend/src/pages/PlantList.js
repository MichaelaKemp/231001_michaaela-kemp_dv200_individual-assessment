// src/pages/PlantList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PlantList.css';
import MonsteraImg from '../assets/Monstera.jpg';
import FiddleLeafFigImg from '../assets/FiddleLeafFig.jpg';
import SnakePlantImg from '../assets/SnakePlant.jpg';
import PothosImg from '../assets/Pothos.jpg';
import ZZPlantImg from '../assets/ZZPlant.jpg';
import AloeVeraImg from '../assets/AloeVera.jpg';
import SpiderPlantImg from '../assets/SpiderPlant.jpg';
import PeaceLilyImg from '../assets/PeaceLily.jpg';

const plants = [
    { id: 1, name: 'Monstera', img: MonsteraImg },
    { id: 2, name: 'Fiddle Leaf Fig', img: FiddleLeafFigImg },
    { id: 3, name: 'Snake Plant', img: SnakePlantImg },
    { id: 4, name: 'Pothos', img: PothosImg },
    { id: 5, name: 'ZZ Plant', img: ZZPlantImg },
    { id: 6, name: 'Aloe Vera', img: AloeVeraImg },
    { id: 7, name: 'Spider Plant', img: SpiderPlantImg },
    { id: 8, name: 'Peace Lily', img: PeaceLilyImg },
];

const PlantList = () => {
    return (
        <div className="plant-list-container">
            <h1>Plants</h1>
            <div className="plant-cards">
                {plants.map(plant => (
                    <div key={plant.id} className="card">
                        <img src={plant.img} alt={plant.name} />
                        <h3>{plant.name}</h3>
                        <Link to={`/plants/${plant.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantList;
