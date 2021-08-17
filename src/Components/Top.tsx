import React from 'react';
import '../styles/Top.css';

interface TopProps{
    stHeading: string;
    ndHeading: string;
    rdHeading: string;
    variant: "dark" | "light";
}

const Top: React.FC<TopProps> = ({ stHeading, ndHeading, rdHeading, variant }) => {
    return (
        <div
        className='Top'
        >
            <div 
                className={`first-heading-top ${variant}`}
            >
                {stHeading}
            </div>
            <div 
                className="second-heading-top"
            >
                {ndHeading}
            </div>
            <div 
                className="third-heading-top"
            >
                {rdHeading}
            </div>
        </div>
    )
}

export default Top;