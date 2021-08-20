// imports
import React from 'react';
import '../styles/Features.css'
import Top from './Top';
import Guy_Mobile_1 from '../assets/guy-mobile-1.png';
import Guy_Mobile_2 from '../assets/guy-mobile-2.png';
import Guy_Cards from '../assets/guy-cards.png';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

// component
const Features: React.FC = () => {
    const { animate, componentRef } = useScrollAnimation();
    // JSX
    return (
        // features container
        <div
            className='Features'
        >
            {/* Headings */}
            <Top 
                stHeading="features"
                ndHeading="What do you gain working with Us?"
                rdHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
                variant="dark"
            />
            {/* features bottom part container */}
            <div 
                className="features-bottom"
            >
                {/* first card container */}
                <motion.div 
                    className="features-card first-card"
                    ref={componentRef as any}
                    whileHover={{
                        scale: 1.1
                    }}
                    initial={{
                        y: animate ? 0 : 10,
                        opacity: 0
                    }}
                    animate={{
                        y: animate ? 0 : 10,
                        opacity: animate ? 1 : 0
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    {/* card img */}
                    <img 
                        src={Guy_Mobile_1} 
                        alt="" 
                    />
                    {/* card title */}
                    <div 
                        className="features-card-title"
                    >
                        Lorem ipsum dolor sit amet
                    </div>
                    {/* card text */}
                    <div 
                        className="features-card-text"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim.
                    </div>
                </motion.div>
                {/* second card container */}
                <motion.div 
                    className="features-card center-card"
                    ref={componentRef as any}
                    whileHover={{
                        scale: 1.1
                    }}
                    initial={{
                        y: animate ? 0 : 10,
                        opacity: 0
                    }}
                    animate={{
                        y: animate ? 0 : 10,
                        opacity: animate ? 1 : 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    {/* card img */}
                    <img 
                        src={Guy_Mobile_2} 
                        alt="" 
                    />
                    {/* card title */}
                    <div 
                        className="features-card-title"
                    >
                        Lorem ipsum dolor sit amet
                    </div>
                    {/* card text */}
                    <div 
                        className="features-card-text"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim.
                    </div>
                </motion.div>
                {/* third card container */}
                <motion.div 
                    className="features-card last-card"
                    ref={componentRef as any}
                    whileHover={{
                        scale: 1.1
                    }}
                    initial={{
                        y: animate ? 0 : 10,
                        opacity: 0
                    }}
                    animate={{
                        y: animate ? 0 : 10,
                        opacity: animate ? 1 : 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    {/* card title */}
                    <img 
                        src={Guy_Cards} 
                        alt="" 
                    />
                    {/* card title */}
                    <div 
                        className="features-card-title"
                    >
                        Lorem ipsum dolor sit amet
                    </div>
                    {/* card text */}
                    <div 
                        className="features-card-text"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim.
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Features;