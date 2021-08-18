// imports
import React from 'react';
import '../styles/Map.css';
import map from '../assets/map.png';
import man_2 from '../assets/man-2.png';

// component
const Map: React.FC = () => {
    // JSX
    return (
        // the map container
        <div
            className='Map'
        >
            {/* the map heading */}
            <div 
                className="map-heading"
            >
                What our clients say about us?
            </div>
            {/* the map text */}
            <div 
                className="map-text"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo.
            </div>
            {/* the map */}
            <div 
                className="map-map"
                style={{
                    backgroundImage: `url(${map})`
                }}
            >
                {/* the map card */}
                <div 
                    className="map-card"
                >
                    {/* the img of the map */}
                    <img
                        src={man_2}
                    />
                    {/* the card that is inside the card */}
                    <div 
                        className="map-card-card"
                    >
                        {/* the card title */}
                        <div 
                            className="map-card-title"
                        >
                            Lorem ipsum dolor 
                        </div>
                        {/* the card text */}
                        <div 
                            className="map-card-text"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas.Lorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;