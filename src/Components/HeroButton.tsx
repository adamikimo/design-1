// imports
import React from 'react';
import '../styles/HeroButton.css';

// props interface
interface HeroButtonProps{
    text: "Management" | "Learning" | "Marketing" | "Programming";
}

// component
const HeroButton: React.FC<HeroButtonProps> = ({ text }) => {
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
                <img src={`/assets/${text}.png`}/>
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