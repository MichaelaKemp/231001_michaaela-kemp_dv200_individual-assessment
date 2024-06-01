// src/pages/PlantDetail.js
import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import Slider from 'react-slick';
import './PlantDetail.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MonsteraImg from '../assets/Monstera.jpg';
import FiddleLeafFigImg from '../assets/FiddleLeafFig.jpg';
import SnakePlantImg from '../assets/SnakePlant.jpg';
import PothosImg from '../assets/Pothos.jpg';
import ZZPlantImg from '../assets/ZZPlant.jpg';
import AloeVeraImg from '../assets/AloeVera.jpg';
import SpiderPlantImg from '../assets/SpiderPlant.jpg';
import PeaceLilyImg from '../assets/PeaceLily.jpg';

const plantDetails = {
    1: {
        name: 'Monstera',
        img: MonsteraImg,
        watering: 'Once a week',
        height: 'Up to 10 feet',
        temperature: '60-80°F (15-27°C)',
        description: 'Monstera deliciosa is a species of flowering plant native to tropical forests of southern Mexico, south to Panama.'
    },
    2: {
        name: 'Fiddle Leaf Fig',
        img: FiddleLeafFigImg,
        watering: 'Once a week',
        height: 'Up to 10 feet',
        temperature: '65-75°F (18-24°C)',
        description: 'Fiddle Leaf Fig is a popular indoor tree featuring large, heavily veined, and violin-shaped leaves that grow upright on a tall plant.'
    },
    3: {
        name: 'Snake Plant',
        img: SnakePlantImg,
        watering: 'Every 2-3 weeks',
        height: 'Up to 4 feet',
        temperature: '60-75°F (16-24°C)',
        description: 'Snake Plant, also known as Sansevieria, is a hardy plant known for its upright, sword-like leaves with yellow or white edges.'
    },
    4: {
        name: 'Pothos',
        img: PothosImg,
        watering: 'Once a week',
        height: 'Up to 10 feet',
        temperature: '65-85°F (18-29°C)',
        description: 'Pothos, also known as Devil’s Ivy, is a popular houseplant with heart-shaped leaves and is known for its air-purifying qualities.'
    },
    5: {
        name: 'ZZ Plant',
        img: ZZPlantImg,
        watering: 'Every 2-3 weeks',
        height: 'Up to 3 feet',
        temperature: '65-75°F (18-24°C)',
        description: 'ZZ Plant, or Zamioculcas zamiifolia, is a low-maintenance plant with glossy, dark green leaves that is tolerant of low light conditions.'
    },
    6: {
        name: 'Aloe Vera',
        img: AloeVeraImg,
        watering: 'Every 3 weeks',
        height: 'Up to 2 feet',
        temperature: '55-80°F (13-27°C)',
        description: 'Aloe Vera is a succulent plant species of the genus Aloe. It is cultivated for agricultural and medicinal uses.'
    },
    7: {
        name: 'Spider Plant',
        img: SpiderPlantImg,
        watering: 'Once a week',
        height: 'Up to 1.5 feet',
        temperature: '65-75°F (18-24°C)',
        description: 'Spider Plant is known for its air-purifying properties and is a common houseplant with long, arching leaves.'
    },
    8: {
        name: 'Peace Lily',
        img: PeaceLilyImg,
        watering: 'Once a week',
        height: 'Up to 3 feet',
        temperature: '65-80°F (18-27°C)',
        description: 'Peace Lily is a popular houseplant known for its dark green leaves and white flowers. It is known for its air-purifying qualities.'
    }
};

// Custom Arrow Components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#4caf50", borderRadius: "50%", height: "30px", width: "30px" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#4caf50", borderRadius: "50%", height: "30px", width: "30px" }}
            onClick={onClick}
        />
    );
};

const PlantDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const plant = plantDetails[id];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const otherPlants = Object.keys(plantDetails).filter(plantId => plantId !== id);

    if (!plant) {
        return <div>Plant not found</div>;
    }

    return (
        <div className="plant-detail-container">
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{plant.name}</h1>
            <img src={plant.img} alt={plant.name} />
            <p>Watering: {plant.watering}</p>
            <p>Height: {plant.height}</p>
            <p>Temperature: {plant.temperature}</p>
            <p>{plant.description}</p>
            <div className="plant-detail-buttons">
                <button onClick={() => addToCart(plant)}>Add to Cart - $14.99</button>
                <Link to="/cart" className="view-cart-button">View Cart</Link>
            </div>
            <h2>More Plants</h2>
            <Slider {...settings}>
                {otherPlants.map(plantId => (
                    <div key={plantId} className="carousel-item">
                        <img src={plantDetails[plantId].img} alt={plantDetails[plantId].name} />
                        <h3>{plantDetails[plantId].name}</h3>
                        <Link to={`/plants/${plantId}`}>View Details</Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PlantDetail;
