// imports
import React from 'react';
import '../styles/HeroButton.css';
import useHeroButtonImg from '../hooks/useHeroButtonImg';

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
        <button
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
        </button>
    )
}

export default HeroButton;