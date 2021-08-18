// imports
import React from 'react';
import Top from './Top';
import '../styles/OurProjects.css';
import OurProjectsCard from './OurProjectsCard';
import Guy_Desktop from '../assets/guy-desktop.png';
import Guy_Mobile_Laptop from '../assets/guy-mobile-laptop.png';
import People_Desktop from '../assets/people-desktop.png';

// component
const OurProjects: React.FC = () => {
    // JSX
    return (
        // Our projects section container
        <div
            className='OurProjects'
        >
            {/* Headings */}
            <Top 
                stHeading="Our Project"
                ndHeading="We are your Best choice, now and ever"
                rdHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
                variant="light"
            />
            {/* our projects body */}
            <div 
                className="ourProjects-body"
            >
                {/* the cards */}
                <OurProjectsCard 
                    id="card-one"
                    img={Guy_Desktop}
                />
                <OurProjectsCard 
                    id="card-two"
                    img={Guy_Mobile_Laptop}
                />
                <OurProjectsCard 
                    id="card-three"
                    img={People_Desktop}
                />
            </div>
            {/* the circles container */}
            <div 
                className="circles-container"
            >
                {/* a circle */}
                <div 
                    className="circle"
                >

                </div>
                {/* a selected circle */}
                <div 
                    className="circle selected"
                >

                    </div>
                <div 
                    className="circle"
                >

                </div>
                <div 
                    className="circle"
                >

                </div>
            </div>
        </div>
    )
}

export default OurProjects;