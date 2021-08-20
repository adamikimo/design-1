// imports
import React from 'react';
import '../styles/HeroButton.css';
import useHeroButtonImg from '../hooks/useHeroButtonImg';
import {
    motion
} from 'framer-motion';

// props interface
interface HeroButtonProps{
    text: "Management" | "Learning" | "Marketing" | "Programming";
}

// component
const HeroButton: React.FC<HeroButtonProps> = ({ text }) => {
    // getting the correct img of the btn
    const img = useHeroButtonImg(text);
    // JSX
    return (
        // button container
        <motion.button
            initial={{
                x: 10,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            whileHover={{
                scale: 1.1
            }}
            transition={{
                type: 'spring',
                duration: 0.75
            }}
            className='heroButton'
        >
            {/* icon container */}
            <div
                className='heroButton_iconContainer'
            >
                {/* icon */}
                <img src={img?.img}/>
            </div>
            {/* button text container */}
            <div
                className='heroButton_text'
            >
                {text}
            </div>
        </motion.button>
    )
}

export default HeroButton;