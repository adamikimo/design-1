// imports
import React from 'react';
import '../styles/Map.css';
import map from '../assets/map.png';
import man_2 from '../assets/man-2.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

// component
const Map: React.FC = () => {
    const { animate, componentRef } = useScrollAnimation();
    const { animate: cardAnimationVal, componentRef: cardRef } = useScrollAnimation();
    // JSX
    return (
        // the map container
        <div
            className='Map'
        >
            {/* the map heading */}
            <motion.div 
                className="map-heading"
                ref={componentRef as any}
                initial={{
                    y: animate ? -10 : 0,
                    opacity: animate ? 0 : 1
                }}
                animate={{
                    y: animate ? 0 : -10,
                    opacity: animate ? 1 : 0
                }}
            >
                What our clients say about us?
            </motion.div>
            {/* the map text */}
            <motion.div 
                ref={componentRef as any}
                className="map-text"
                initial={{
                    y: animate ? -10 : 0,
                    opacity: animate ? 0 : 1
                }}
                animate={{
                    y: animate ? 0 : -10,
                    opacity: animate ? 1 : 0
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo.
            </motion.div>
            {/* the map */}
            <div 
                className="map-map"
                style={{
                    backgroundImage: `url(${map})`
                }}
            >
                {/* the map card */}
                <motion.div 
                    className="map-card"
                    ref={cardRef as any}
                    initial={{
                        y: cardAnimationVal ? -10 : 0,
                        opacity: cardAnimationVal ? 0 : 1
                    }}
                    animate={{
                        y: cardAnimationVal ? 0 : -10,
                        opacity: cardAnimationVal ? 1 : 0
                    }}
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
                </motion.div>
            </div>
        </div>
    )
}

export default Map;