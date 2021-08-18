// imports
import React from 'react';
import '../styles/Features.css'
import Top from './Top';
import Guy_Mobile_1 from '../assets/guy-mobile-1.png';
import Guy_Mobile_2 from '../assets/guy-mobile-2.png';
import Guy_Cards from '../assets/guy-cards.png';

// component
const Features: React.FC = () => {
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
                <div 
                    className="features-card first-card"
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
                </div>
                {/* second card container */}
                <div 
                    className="features-card center-card"
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
                </div>
                {/* third card container */}
                <div 
                    className="features-card last-card"
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
                </div>
            </div>
        </div>
    )
}

export default Features;